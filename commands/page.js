import inquirer from 'inquirer'
import shelljs from 'shelljs'

inquirer.prompt([
    {
        name: 'componentName',
        message: 'Quel est le nom de la page ?'
    },
]).then(comp => {
    console.info('Page :', comp.componentName);
    const c = comp.componentName;
    inquirer.prompt([
        {
            name: 'moduleName',
            message: 'Dans quel Module ?'
        },
    ]).then(mod => {
        console.info('Module :', mod.moduleName);
        const module = mod.moduleName;
        inquirer.prompt([
            {
                name: 'templateName',
                message: 'Avec quel template ? ',
                type: 'list',
                choices: [{ name: 'Volt-Pro', value: 'VP' }, { name: 'Dashforge', value: 'DA' }]
            }
        ]).then(temp => {
            const template = temp.templateName;
            if (template === 'VP') {
                const pageName = template + '-' + c
                shelljs.exec("ng g c " + module + "/views/volt-pro/" + pageName + " --skip-tests=true")
            }
            if (template === 'DA') {
                const pageName = template + '-' + c
                shelljs.exec("ng g c " + module + "/views/dashforge/" + pageName + " --skip-tests=true")
            }
            console.info("Page créee avec succès")
        })
    });
});