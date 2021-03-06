const Employee = require('./Employee')
const inquirer = require('inquirer')
const generateHtml = require('../src/generateHtml.js')

class Engineer extends Employee {
  constructor(name, email, id, role){
    super()
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
  }

  getGithub(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'github',
        message: 'Enter team member Github:'
      }
    ]).then((data)=>{
      this.github = data.github;
      this.ask();
      generateHtml.generateEngineer(this.name, this.id, this.email, this.role, this.github);


    })
  }


}

module.exports = Engineer;
