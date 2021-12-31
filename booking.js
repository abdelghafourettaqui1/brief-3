let price=0;
function vehicule() {

    let choice = document.querySelector("#type").value;

    switch (choice) {
        case "Citadine":
            document.getElementById("gearbox").innerHTML = "<option> Manuelle </option>";
            document.getElementById("fuel").innerHTML = "<option> Essence </option> <option> Diesel </option> <option> Electrique </option> <option> Hybride </option>";
            price = 12;
            break;
        case "Motorcycle":
            document.getElementById("gearbox").innerHTML = "<option> None </option>";
            document.getElementById("fuel").innerHTML = "<option> Essence </option> <option> Electrique </option>";

            price = 10;
            break;
        case "Compact":
            document.getElementById("gearbox").innerHTML = "<option> Manuelle</option>";
            document.getElementById("fuel").innerHTML = "<option> Essence </option> <option> Hybride </option> <option> Diesel </option>  ";
            price = 14;

            break;
        case "Utilitaire":
            document.getElementById("gearbox").innerHTML = "<option> Manuelle </option>";
            document.getElementById("fuel").innerHTML = "<option> Diesel </option>  ";
            price = 16;

            break;

        case "Berline":
            document.getElementById("gearbox").innerHTML = "<option> Automatique </option>";
            document.getElementById("fuel").innerHTML = "<option> Essence </option> <option> Hybride </option> <option> Diesel </option>  ";
            price = 20;
            break;

        case "Engine de Chantier":
            document.getElementById("gearbox").innerHTML = "<option> Manuelle</option>";
            document.getElementById("fuel").innerHTML = "<option> Essence </option> <option> Diesel </option>  ";
            price = 900;
            break;

        case "Camion":
            document.getElementById("gearbox").innerHTML = "<option> Automatique </option>";
            document.getElementById("fuel").innerHTML = "<option> Diesel </option>  ";
            price = 250;
            break;
        default:
            document.getElementById("gearbox").innerHTML = "<option> None </option>";
            document.getElementById("fuel").innerHTML = "<option> None </option>  ";
    }


}
let gearbox1= 0;
function gearbox2() {
    switch (s2.value) {
        case "manuelle":
             gearbox1 = 0;
            break;

        case "automatique": 
            gearbox1 = 0.19;
            break;
        default: ;
    }

}

let s2 = document.getElementById("fuel");
let fuel1= 0;
function fuel2() {

    switch (s2.value) {
        case "essence":
             fuel1= 0.14;
            break;

        case "hybride":
             fuel1 = 0.09;
            break;

        case "diesel":
             fuel1 = 0.21;
            break;

        case "electrique":
             fuel1 = 0.05;
            break;
        default: ;


    }

}



function vehiculePrice() {
    let total=0;
    let dayNumber = document.getElementById("day").value;
    total = dayNumber * (price + (price * fuel1) + (price * gearbox1)) + "€";
    alert("The total price is :"+ total );
    
}
