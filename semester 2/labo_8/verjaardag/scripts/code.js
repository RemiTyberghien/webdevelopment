const setup = () => {

    const verjaardag = new Date("2006-06-03");
    const vandaag = new Date();
    const tijdVerschil = vandaag - verjaardag;
    const dagenVerschil = Math.floor(tijdVerschil / (1000 * 60 * 60 * 24));
    console.log(`Het aantal dagen tussen mijn verjaardag en vandaag is: ${dagenVerschil} dagen.`);

}
window.addEventListener("load", setup);