const fs = require('fs');

let members = []

function generateManager(name, id, email, role, room){
    const managerCard =
    `<div id='team-membercard'>
            <div id="card-title">
              <h2 id="name">${name}</h2>
              <h2 id="role"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="45" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 6">
          <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
        </svg> ${role}</h2>
          </div>
          <div class="card-content">
            <div id='card-detail'>
              <p>id: ${id}</p>
              <p>email:<a href="mailto: ${email} "> ${email}</a></p>
              <p id="last-line">room: ${room}</p>
            </div>
          </div>
      </div>
    `
    members.push(managerCard);
};

function generateEngineer(name, id, email, role, github){
  const engineerCard =
  `<div id='team-membercard'>
            <div id="card-title">
              <h2 id="name">${name}</h2>
              <h2 id="role"> <svg xmlns="http://www.w3.org/2000/svg" width="39" height="25" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 13">
          <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
        </svg>  ${role}</h2>
          </div>
          <div class="card-content">
            <div id='card-detail'>
              <p>id: ${id}</p>
              <p>email:<a href="mailto: ${email} "> ${email}</a></p>
              <p id="last-line">Github:<a href="https://${github} "> ${github}</a></p>
            </div>
          </div>
      </div>
    `
  members.push(engineerCard);

};

function generateIntern(name, id, email, role, school){
  const internCard =
  `<div id='team-membercard'>
            <div id="card-title">
              <h2 id="name">${name}</h2>
              <h2 id="role"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-book" viewBox="0 0 16 14">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg> ${role}</h2>
          </div>
          <div class="card-content">
            <div id='card-detail'>
              <p>Id: ${id}</p>
              <p>email:<a href="mailto: ${email} "> ${email}</a></p>
              <p id="last-line">School: ${school}</p>
            </div>
          </div>
      </div>
  `
  members.push(internCard);
};

function printCards(){
  const fileName = 'teamProfile.html'
  let teamMembers = members.join("");
  const teamProfile =
  `
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Team-profile</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="heading">
      <h1 class= "header">Team profile</h1>
    </div>
    <div class="content">
      <div class="Team-members">
        ${teamMembers}
      </div>
    </div>
  </body>
</html>
  `
fs.writeFile(fileName, teamProfile, (err) =>
  err ? console.log(err) : console.log("success!")
);



}

module.exports = {generateIntern, generateManager, generateEngineer, printCards };
