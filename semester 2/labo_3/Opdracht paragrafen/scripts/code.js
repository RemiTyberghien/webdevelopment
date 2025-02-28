const setup = () => {
    let opvallen = document.getElementsByClassName("belangerijk");
    for(let i = 0; i < opvallen.length; i++)
    {
        opvallen[i].className = "belangerijk opvallend";
    }
}
window.addEventListener("load", setup);