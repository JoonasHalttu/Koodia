//console.log("Scripti toimii");

const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventlistener('click', e=> {
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  let xhr = new XMLHTTpRequest();
  let url = https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp2?code=PnWhScmEcspN8Fy7eYKnIZA37AFgUZ0fMQ1OpXOJ6dtBPBGNXAMIqQ==

  xhr.open("POST", url, true);

xhr.setRequestHeader("Content-type", "application/json");

xhr:onreadystatechange = function(){
  if(xhr.readystate === 4 && xhr.status === 200){
    console.log("valmis, yhteys toimii");
  }
};
const nimi = document.querySelector('#nimi').value;
const nimi = document.querySelector('#email').value;
console.log("nimikentän sisältö: " + nimi);
const viesti = document.querySelector('#viesti').value;
console.log("viestikentän sisältö: " + viesti);
var data = JSON.stringify({
  "EmailMsg": viesti, //Kirjoittaa sisällön
  "EmailTo": "Joonas.halttu", //oma sähköpistisi!!!!!
  "EmailName": nimi //Nimi-kentän sisältö
});
xhr.send(data);
} 