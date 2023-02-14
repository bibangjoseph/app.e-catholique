import inquirer from 'inquirer'
import shelljs from 'shelljs'

inquirer.prompt([
    {
        name: 'componentName',
        message: 'Quel est le nom du partial ?'
    },
]).then(answers => {
    console.info('Partials :', answers.componentName);
    const c = answers.componentName;
    inquirer.prompt([
        {
            name: 'moduleName',
            message: 'Dans quel Module ?'
        },
    ]).then(answers => {
        console.info('Module :', answers.moduleName);
        const module = answers.moduleName;
        shelljs.exec("ng g c " + module + "/partials/" + c + " --skip-tests=true")
        console.info("Le partials crée avec succès")
    });
});