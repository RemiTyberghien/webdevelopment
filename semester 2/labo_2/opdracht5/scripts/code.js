const setup = () => {
    let pElement = document.getElementById("txtOutput"); // Haal het element op

    const klikken = () => {
        pElement.innerHTML = "Welkom!";
    }

    btnDelen.addEventListener("click", klikken); // Voeg de event listener toe
}

// Wacht tot de pagina volledig geladen is voordat setup wordt uitgevoerd
window.addEventListener("load", setup);
