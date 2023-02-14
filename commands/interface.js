import inquirer from 'inquirer'
import shelljs from 'shelljs'

inquirer.prompt([
    {
        name: 'interfaceName',
        message: 'Quel est le nom du model ?'
    },
]).then(answers => {
    console.info('Model :', answers.interfaceName);
    const c = answers.interfaceName;
    inquirer.prompt([
        {
            name: 'moduleName',
            message: 'Dans quel Module ?'
        },
    ]).then(answers => {
        console.info('Module :', answers.moduleName);
        const module = answers.moduleName;
        shelljs.exec("ng g interface " + module + "/models/" + c)
        console.info("Model crée avec succès")
    });
});