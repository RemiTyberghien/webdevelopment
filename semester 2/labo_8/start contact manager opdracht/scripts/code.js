let personen = [];
let geselecteerdeIndex = -1;

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    if (document.querySelectorAll('.errorMessage:not(:empty)').length > 0) {
        return;
    }

    // indien ok, bewaar de ingegeven data.
    let persoon = {
        voornaam: document.getElementById("txtVoornaam").value.trim(),
        familienaam: document.getElementById("txtFamilienaam").value.trim(),
        geboortedatum: document.getElementById("txtGeboorteDatum").value.trim(),
        email: document.getElementById("txtEmail").value.trim(),
        aantalKinderen: document.getElementById("txtAantalKinderen").value.trim()
    };

    // een nieuw aangemaakte persoon voegen we toe
    // een bestaande persoon in de lijst passen we aan
    if (geselecteerdeIndex === -1) {
        personen.push(persoon);
    } else {
        personen[geselecteerdeIndex] = persoon;
    }

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
    updateLijst();
    resetFormulier();
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    geselecteerdeIndex = -1;
    resetFormulier();
};

const updateLijst = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = "";
    personen.forEach((persoon, index) => {
        let optie = document.createElement("option");
        optie.textContent = `${persoon.voornaam} ${persoon.familienaam}`;
        optie.value = index;
        lstPersonen.appendChild(optie);
    });
};

const selecteerPersoon = (event) => {
    geselecteerdeIndex = event.target.value;
    if (geselecteerdeIndex >= 0) {
        let persoon = personen[geselecteerdeIndex];
        document.getElementById("txtVoornaam").value = persoon.voornaam;
        document.getElementById("txtFamilienaam").value = persoon.familienaam;
        document.getElementById("txtGeboorteDatum").value = persoon.geboortedatum;
        document.getElementById("txtEmail").value = persoon.email;
        document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
    }
};

const resetFormulier = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    clearAllErrors();
};

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    lstPersonen.addEventListener("change", selecteerPersoon);
};

window.addEventListener("load", setup);