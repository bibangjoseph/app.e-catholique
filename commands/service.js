import inquirer from 'inquirer'
import shelljs from 'shelljs'

inquirer.prompt([
    {
        name: 'componentName',
        message: 'Quel est le nom du service ?'
    },
]).then(answers => {
    console.info('Service :', answers.componentName);
    const c = answers.componentName;
    inquirer.prompt([
        {
            name: 'moduleName',
            message: 'Dans quel Module ?'
        },
    ]).then(answers => {
        console.info('Module :', answers.moduleName);
        const module = answers.moduleName;
        shelljs.exec("ng g s " + module + "/services/" + c + " --skip-tests=true")
        console.info("Service crée avec succès")
    });
});