const setup = () => {
    let buttons = document.getElementsByClassName("klik");


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            buttons[i].classList.toggle("aan");
        });
    }
}
window.addEventListener("load", setup);