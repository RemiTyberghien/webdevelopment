const setup = () => {
}


let gemeenten = [];

while (true) {
    let gemeente = prompt("Voer een gemeente in (of typ 'stop' om te stoppen):");
    if (gemeente.toLowerCase() === "stop") {
        break;
    }
    gemeenten.push(gemeente);
}

gemeenten.sort();

gemeenten.forEach(gemeente => {
    document.write(`<option value="${gemeente}">${gemeente}</option>`);
});




window.addEventListener("load", setup);