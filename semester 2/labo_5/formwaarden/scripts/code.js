const setup = () => {
    let btnValideer = document.getElementById("resultaat");
    btnValideer.addEventListener("click", toonResultaat);
};

const toonResultaat = () => {
    let isRoker = document.getElementById("isRoker").checked ? "is roker" : "is geen roker";

    let moedertaalElement = document.querySelector('input[name="moedertaal"]:checked');
    let moedertaal = moedertaalElement ? `moedertaal is ${moedertaalElement.nextSibling.textContent.trim()}` : "moedertaal is niet geselecteerd";

    let favorieteland = document.getElementById("favorieteland").value;

    let bestellingSelect = document.getElementById("bestelling");
    let bestelling = Array.from(bestellingSelect.selectedOptions).map(option => option.value);
    bestelling = bestelling.length > 0 ? `bestelling bestaat uit: ${bestelling.join(", ")}` : "geen bestelling geselecteerd";

    console.log(isRoker);
    console.log(moedertaal);
    console.log(`favoriete buurland is ${favorieteland}`);
    console.log(bestelling);
};

window.addEventListener("load", setup);
