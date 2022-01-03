var price = 0;

function vehicule() {

    var type = document.querySelector("#type").value;

    switch (type) {

        case "Moto":
            price = 10
            document.getElementById("gearbox").innerHTML = "<option> ------ </option>";
            document.getElementById("fuel").innerHTML = "<option> Essence </option> <option> Electrique </option>";
            break;

        case "Citadine": 
            price = 12
            document.getElementById("gearbox").innerHTML = "<option> Manuelle </option>";
            document.getElementById("fuel").innerHTML = "<option> Essence </option> <option> Diesel </option> <option> Electrique </option> <option> Hybride </option>";
            break;

        case "Compact": 
            price = 14
            document.getElementById("gearbox").innerHTML = "<option> Manuelle </option>";
            document.getElementById("fuel").innerHTML = "<option> Essence </option> <option> Hybride </option> <option> Diesel </option>";
            break;
case "Berline": 
            price = 20
            document.getElementById("gearbox").innerHTML = "<option> Automatique </option>";
            document.getElementById("fuel").innerHTML = "<option> Essence </option> <option> Hybride </option> <option> Diesel </option>";
            break;

        case "Utilitaire": 
            price = 16
            document.getElementById("gearbox").innerHTML = "<option> Manuelle </option>";
            document.getElementById("fuel").innerHTML = "<option> Diesel </option>";
            break;

        case "Engin de Chantier": 
            price = 900
            document.getElementById("gearbox").innerHTML = "<option> Manuelle </option>";
            document.getElementById("fuel").innerHTML = "<option> Essence </option> <option> Diesel </option>";
            break;

        case "Camion": 
            price = 250;
            document.getElementById("gearbox").innerHTML = "<option> Automatique </option>";
            document.getElementById("fuel").innerHTML = "<option> Diesel </option>";
            break;

        default: 
            document.getElementById("gearbox").innerHTML = "<option> </option>";
            document.getElementById("fuel").innerHTML = "<option> </option>";
    }


}
var gearBox1 = 0
var gearbox = document.getElementById("gearbox")

function grearBOX(){
    switch (gearbox.value.toLowerCase()) {

        case "manuelle": 
        gearBox1 = 0;
        break;

        case "automatique": 
        gearBox1 = 0.19;
        break;

        default : ;
    }

}
var fuel1 = 0;
var fuel = document.getElementById("fuel");


function FUEL() {

    switch (fuel.value.toLowerCase()) {

        case "electrique": 
            fuel1 = 0.05;
            break;

        case "hybride": 
            fuel1 = 0.09;
            break;

        case "essence": 
            fuel1 = 0.14;
            break;

        case "diesel": 
            fuel1 = 0.21;
            break;

        default : ;


    }

}

var calcul = 0;

function total() {

    var day= document.getElementById("day").value;
    calcul = day * (price + (price * fuel1) + (price * gearBox1));
    var new_calcul = parseFloat(calcul).toFixed(2)
    document.getElementById("play").innerText = new_calcul+'€';

}

