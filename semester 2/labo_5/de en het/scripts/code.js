const setup = () => {
}

let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel."



for (let i = 0; i < tekst.length-1; i++) {

    if(tekst.slice(i, i+4) === " de ")
    {
        let eerstedeel = tekst.slice(0,i);
        let tweededeel = tekst.slice(i+4);
        tekst = eerstedeel + " het " + tweededeel;
    }

}

console.log(tekst);
window.addEventListener("load", setup);