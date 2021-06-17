const Employee = require ('./Employee');
const inquirer = require('inquirer')
const generateHtml = require('../src/generateHtml.js')

class Intern extends Employee{
  constructor(name, email, id, role){
    super()
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
  }

  getSchool(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'school',
        message: 'What school does this intern attend:'
      }
    ]).then((data)=>{
      this.school = data.school
      this.ask();
      generateHtml.generateIntern(this.name, this.id, this.email, this.role, this.school);
    })
  }

}

module.exports = Intern;
