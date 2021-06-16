const Employee = require ('./Employee');
const inquirer = require('inquirer')

class Intern extends Employee{
  constructor(name, email, id, role){
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
    })
  }

}

module.exports = Intern;
