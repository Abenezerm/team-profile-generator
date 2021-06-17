const fs = require('fs')

let members = []

function generateManager(name, id, email, role, room){
    const managerCard =
    `<div id='team-membercard'>
        <div id="card-title">
          <h2>${name}</h2>
          <h2>${role}</h2>
        </div>
        <div id='card-datails'>
          <p>id: ${id}</p><br>
          <p>email: ${email}</p><br>
          <p>room: ${room}</p><br>
    </div>
    `
    members.push(managerCard);
};

function generateEngineer(name, id, email, role, github){
  const engineerCard =
  `<div id='team-membercard'>
      <div id="card-title">
        <h2>${name}</h2>
        <h2>${role}</h2>
      </div>
      <div id='card-datails'>
        <p>id: ${id}</p><br>
        <p>email: ${email}</p><br>
        <p>Github: ${github}</p><br>
  </div>
  `
  members.push(engineerCard);

};

function generateIntern(name, id, email, role, school){
  const internCard =
  `<div id='team-membercard'>
      <div id="card-title">
        <h2>${name}</h2>
        <h2>${role}</h2>
      </div>
      <div id='card-datails'>
        <p>id: ${id}</p><br>
        <p>email: ${email}</p><br>
        <p>School: ${school}</p><br>
  </div>
  `
  members.push(internCard);
};

function printCards(){
  for(let i = 0; i < members.length; i++){
    console.log(members[i]);
  }

}

module.exports = {generateIntern, generateManager, generateEngineer, printCards };
