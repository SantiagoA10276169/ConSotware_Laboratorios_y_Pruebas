console.log("Hello Summoner!");
console.info("welcome to this secret place contol by yours truly, FEH!");
console.warn("Summon Fail :(");
console.error("Vitit Nintendo.com/support to lern more")

//variables, constantes

let summons = 'YOU SUMMON ';

//%{nombre_variable} sirve para imprimir el valor de una variable con ``
console.log(summons + "Baltre");

//const sirve para declarar constantes
const summon = 5;

//alcance de variables
//{
//let Castle_EX = 4;
//}

//console.log(Castle_EX);

//alert, prompt, confirm
alert(`To get one of those Heroes you must spend ${summon} Orbs`);
const Heroes_Fav = prompt("¿Who is your favorite Hero?");
console.log(`Your Favorite Hero is ${Heroes_Fav}`);

const RE = confirm("Ready to summon?");

if (RE) {
    console.info("LEST'S GET SOME HEROES");
} else {
    console.warn("get more orbs in the game first, i know you can do it");
}

//funciones tradicionales

function speark(type){
    console.log(`You can have a garantie hero of your choose ${type}`);
}

//obtener tu heroe garantizado

const speark_hero = () => {
    console.log("You'r selected heroe was Ike - Vanguard Legend ")
}

document.getElementById("speark").onclick = () => {
    speark(Heroes_Fav);
    speark_hero();
}


// arreglos

const arreglo = ["Skill"];

const arreglo2 = new Array();

arreglo.push("A Skill");

arreglo[4] = "S Skillás";

//arreglos asociativos

arreglo["Skill"] = "Atk +3";

//recorrido tradicional del arreglo

for (let i = 0; i < arreglo.length; i++) {

    console.log(arreglo[i]);

}

//recorridos alternativos del arreglo

for(let posicion in arreglo) {

    console.log(posicion + ": " + arreglo[posicion]);

}

//objetos 

const objeto = {};

const Hero = {

    Weapon: "Ragnell",

    Skill_A: "Warding Breath"

}

//const objeto = {} 

console.log(Hero);