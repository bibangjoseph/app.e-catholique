import inquirer from 'inquirer'
import shelljs from 'shelljs'

inquirer.prompt([
    {
        name: 'moduleName',
        message: 'Quel est le nom du module ?'
    },
]).then(answers => {
    console.info('Module : ', answers.moduleName);
    const module = answers.moduleName;
    shelljs.exec("ng g module " + module + " --routing --module=app.module")
    shelljs.exec("ng g s " + module + "/services/" + module + " --skip-tests=true")
    shelljs.exec("ng g c " + module + "/menu/menu-" + module + " --module=app.module --skip-tests=true ")

    console.info("Le module " + module + " a été crée avec succès")
});