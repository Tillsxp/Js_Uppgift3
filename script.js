const div = document.createElement("div");
const mittNamn = document.createTextNode("Matilda");
div.appendChild(mittNamn); //Klar
const first = document.body;
document.body.appendChild(div)


const divi = document.createElement("div"); //Klar
let array = ["Katt","Hund","Lodjur","Fågel","Bäver"]; //Klar
const lista = document.createTextNode(array);
divi.appendChild(lista);
document.body.appendChild(divi);

