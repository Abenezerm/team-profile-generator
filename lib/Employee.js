const inquirer  = require ('inquirer');

class Employee{

  constructor(){
    this.name
    this.id
    this.email
  };

   getName(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter team member name:'
      }
    ]).then((data)=>{
      if (data != undefined){
        this.name = data.name
        this.getID()
      }

    })
  };

   getID(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'id',
        message: 'Enter team member id:'
      }
    ]).then((data)=>{
       this.id = data.id
       this.getEmail()
    })
  };

  getEmail(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'email',
        message: 'Enter team member email:'
      }
    ]).then((data)=>{
      this.email = data.email
      this.getRole()
      console.log(this.name + this.id + this.email)
    })
  };

  getRole(){
    inquirer.prompt([
      {
        type: 'list',
        name: 'role',
        message: 'what role does this emplyee have on your team?',
        choices: ["Engineer", "Manager", "Intern"]
      }
    ]).then((data)=>{
      if (data.role == 'Engineer'){
        const Engineer = require('./Engineer')
        const engineer = new Engineer(this.name, this.email, this.id, data.role);
        engineer.getGithub();
      }else if (data.role == 'Manager'){
        const Manager = require('./Manager')
        const manager = new Manager(this.name, this.email, this.id, data.role);
        manager.getRoom();
      }else{
        const Intern = require("./Intern")
        const intern = new Intern(this.name, this.email, this.id, data.role)
        intern.getSchool();
      }
    })
  };
}

module.exports = Employee;
