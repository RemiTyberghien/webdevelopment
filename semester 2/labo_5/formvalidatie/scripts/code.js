const setup = () => {
    const btnValideer = document.getElementById("btnValideer");

    const toonFout = (id, boodschap) => {
        document.getElementById(id).textContent = boodschap;
        document.getElementById(id.replace("error-", "")).classList.add("fout");
    };

    const resetFout = (id) => {
        document.getElementById(id).textContent = "";
        document.getElementById(id.replace("error-", "")).classList.remove("fout");
    };

    btnValideer.addEventListener("click", () => {
        let fout = false;

        const controleerVeld = (id, conditie, boodschap) => {
            if (conditie) {
                toonFout(id, boodschap);
                fout = true;
            } else {
                resetFout(id);
            }
        };

        controleerVeld("error-voornaam", document.getElementById("voornaam").value.trim().length > 30, "Max. 30 karakters");

        let familienaam = document.getElementById("familienaam").value.trim();
        controleerVeld("error-familienaam", familienaam.length === 0, "Verplicht veld");
        controleerVeld("error-familienaam", familienaam.length > 50, "Max. 50 karakters");

        let geboortedatum = document.getElementById("geboortedatum").value.trim();
        controleerVeld("error-geboortedatum", geboortedatum.length === 0, "Verplicht veld");
        controleerVeld("error-geboortedatum", !/^\d{4}-\d{2}-\d{2}$/.test(geboortedatum), "Formaat is niet jjjj-mm-dd");

        let email = document.getElementById("email").value.trim();
        controleerVeld("error-email", email.length === 0, "Verplicht veld");
        controleerVeld("error-email", !email.includes("@") || email.startsWith("@") || email.endsWith("@"), "Geen geldig email adres");

        let aantalKinderen = document.getElementById("aantalKinderen").value.trim();
        controleerVeld("error-kinderen", !/^\d+$/.test(aantalKinderen), "Is geen positief getal");
        controleerVeld("error-kinderen", parseInt(aantalKinderen) >= 99, "Is te vruchtbaar");

        if (!fout) alert("Proficiat!");
    });
};

window.addEventListener("load", setup);
