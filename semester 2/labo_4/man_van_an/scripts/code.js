const setup = () => {
}

let tekst = "De man van An geeft geen hand aan ambetante verwanten";
let zoekterm = "an";
let tel = 0;
let pos = tekst.indexOf(zoekterm);

// Met indexOf
while (pos !== -1) {
    tel++;
    pos = tekst.indexOf(zoekterm, pos + 1);
}
console.log("Aantal keer 'an' gevonden met indexOf:", tel);

// Met lastIndexOf
tel = 0;
pos = tekst.lastIndexOf(zoekterm);
while (pos !== -1) {
    tel++;
    if (pos === 0) break;
    pos = tekst.lastIndexOf(zoekterm, pos - 1);
}
console.log("Aantal keer 'an' gevonden met lastIndexOf:", tel);

window.addEventListener("load", setup);