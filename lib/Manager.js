const Employee = require('./Employee');
const inquirer = require('inquirer')
const generateHtml = require('../src/generateHtml.js')

class Manager extends Employee {
  constructor(name, email, id, role){
    super()
    this.name  = name;
    this.email = email;
    this.id = id;
    this.role = role;
  }

  getRoom(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'room',
        message: 'Enter Manger Room number:'
      }
    ]).then((data)=>{
      this.room = data.room;
      this.ask();
      generateHtml.generateManager(this.name, this.id, this.email, this.role, this.room);
    })
  }
}

module.exports = Manager;
