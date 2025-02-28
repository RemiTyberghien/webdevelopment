const setup = () => {
}

const printWithSpaces =() => {
    let inputText = document.getElementById("tekst").value;
    let spacedText = inputText.split("").join(" ");
    console.log(spacedText);
    window.addEventListener("load", setup);
}