const storeSliderValues = () => {
    localStorage.setItem("Red", document.getElementById("sldRed").value);
    localStorage.setItem("Green", document.getElementById("sldGreen").value);
    localStorage.setItem("Blue", document.getElementById("sldBlue").value);
};

const restoreSliderValues = () => {
    document.getElementById("sldRed").value = localStorage.getItem("Red");
    document.getElementById("sldGreen").value = localStorage.getItem("Green");
    document.getElementById("sldBlue").value = localStorage.getItem("Blue");

    document.getElementById("lblRed").innerHTML = localStorage.getItem("Red");
    document.getElementById("lblGreen").innerHTML = localStorage.getItem("Green");
    document.getElementById("lblBlue").innerHTML = localStorage.getItem("Blue");

    update();
};

const storeSwatches = () => {
    let swatchElements = document.getElementsByClassName("swatch");
    let swatches = [];

    for (let swatch of swatchElements) {
        swatches.push({
            red: swatch.getAttribute("data-red"),
            green: swatch.getAttribute("data-green"),
            blue: swatch.getAttribute("data-blue")
        });
    }

    localStorage.setItem("swatches", JSON.stringify(swatches));
};

const restoreSwatches = () => {
    let swatches = JSON.parse(localStorage.getItem("swatches"));
    if (!swatches) return;

    for (let swatch of swatches) {
        addSwatchComponent(swatch.red, swatch.green, swatch.blue);
    }
};
