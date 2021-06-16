const Employee = require('./Employee');
const inquirer = require('inquirer')

class Manager extends Employee {
  constructor(name, email, id, role){
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
    })
  }
}

module.exports = Manager;
