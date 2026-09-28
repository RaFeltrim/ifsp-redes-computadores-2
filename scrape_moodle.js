const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    console.log("Iniciando o navegador. Por favor, faça o login no Moodle...");
    
    // Inicia o navegador de forma visível
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Acessa a página da disciplina
    await page.goto('https://moodle.scl.ifsp.edu.br/course/view.php?id=5190');

    // Aguarda até 3 minutos (180000 ms) pelo container principal do curso, indicando que o login foi feito
    try {
        console.log("Aguardando o login (timeout de 3 minutos)...");
        await page.waitForSelector('.course-content', { timeout: 180000 });
        console.log("Login detectado! Iniciando mapeamento dos tópicos...");
    } catch (e) {
        console.error("Tempo esgotado ou erro ao detectar a página do curso. O script será encerrado.");
        await browser.close();
        return;
    }

    // Extrai os dados da página
    const courseData = await page.evaluate(() => {
        const data = {
            title: document.title,
            sections: []
        };

        // Seleciona todos os tópicos/seções do curso
        const sections = document.querySelectorAll('li.section.main');
        
        sections.forEach(sec => {
            const sectionNameElement = sec.querySelector('.sectionname');
            const sectionName = sectionNameElement ? sectionNameElement.innerText.trim() : 'Tópico Geral';
            
            const activities = [];
            const activityNodes = sec.querySelectorAll('.activity');
            
            activityNodes.forEach(act => {
                const instanceNameElement = act.querySelector('.instancename');
                if (instanceNameElement) {
                    const nameRaw = instanceNameElement.innerText.trim();
                    const linkElement = act.querySelector('a');
                    const link = linkElement ? linkElement.href : null;
                    
                    // Remove o sufixo de acessibilidade do nome (ex: "Tarefa", "Arquivo", "URL")
                    const hiddenSpan = instanceNameElement.querySelector('.accesshide');
                    const type = hiddenSpan ? hiddenSpan.innerText.trim() : 'Desconhecido';
                    
                    let cleanName = nameRaw;
                    if (hiddenSpan) {
                        cleanName = nameRaw.replace(hiddenSpan.innerText, '').trim();
                    }

                    activities.push({
                        name: cleanName,
                        type: type,
                        url: link
                    });
                }
            });

            data.sections.push({
                name: sectionName,
                activities: activities
            });
        });

        return data;
    });

    // Salva o JSON no disco
    fs.writeFileSync('moodle_content.json', JSON.stringify(courseData, null, 2));
    
    console.log("Mapeamento concluído com sucesso!");
    console.log("Arquivo 'moodle_content.json' salvo localmente.");
    
    await browser.close();
})();
