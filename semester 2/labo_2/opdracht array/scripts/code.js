const setup = () => {
    let familieleden = ['jan','piet','pol','didier','aden']
    console.log(familieleden.length);
    console.log(familieleden[0]);
    console.log(familieleden[2]);
    console.log(familieleden[4]);

    function VoegNaamToe(namenArray) {
        let nieuweNaam = prompt("Voer een naam in:");
            familieleden.push(nieuweNaam);
    }
    VoegNaamToe(familieleden);
    console.log(familieleden);


    console.log(familieleden.toString());
}
window.addEventListener("load", setup);