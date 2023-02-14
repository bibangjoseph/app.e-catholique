import inquirer from 'inquirer'
import shelljs from 'shelljs'

inquirer.prompt([
    {
        name: 'componentName',
        message: 'Quel est le nom du composant ?'
    },
]).then(answers => {
    console.info('Composant :', answers.componentName);
    const c = answers.componentName;
    inquirer.prompt([
        {
            name: 'moduleName',
            message: 'Dans quel Module ?'
        },
    ]).then(answers => {
        console.info('Module :', answers.moduleName);
        const module = answers.moduleName;
        shelljs.exec("ng g c " + module + "/components/" + c + " --skip-tests=true")
        console.info("Le composant crée avec succès")
    });
});