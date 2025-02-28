const setup = () => {
    let knop = document.querySelector("#bereken");
    knop.addEventListener("click", bereken);
}

window.addEventListener("load", setup);


const bereken = () => {

    let kostprijs = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btwprijzen = document.getElementsByClassName("btw");
    let subtotallen = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementById("totaal");
    let totaalPrijs = 0;

    for (let i = 0; i < kostprijs.length; i++) {
        let prijsText = kostprijs[i].textContent;
        let prijs = parseFloat(prijsText.replace(" Eur", ""));
        let aantal = parseFloat(aantallen[i].value);
        let btwText = btwprijzen[i].textContent;
        let btw = parseFloat(btwText.replace("%", "")) / 100;
        let subtotaal = (prijs * aantal) * (1 + btw);
        
        subtotallen[i].textContent = subtotaal.toFixed(2) + " Eur";
        totaalPrijs += subtotaal;
    }
    
    totaal.textContent = totaalPrijs.toFixed(2) + " Eur";
}
