const setup = () => {
    let button = document.getElementById("click");
    button.addEventListener("click", zoek);
    cardUitgeschiedenis();
}

const zoek = () => {
    let input = document.getElementById("input").value;
    let commando = input.slice(0, 2);
    let text = input.slice(2);
    let url = "";
    let titel = "";

    if (commando === "/y") {
        titel = "YouTube";
        url = "https://www.youtube.com/results?search_query=" + text
    } else if (commando === "/g") {
        titel = "Google";
        url = "https://www.google.com/search?q=" + text;
    } else if (commando === "/x") {
        titel = "X";
        url = "https://x.com/hashtag/" + text;
    } else if (commando === "/i") {
        titel = "Instagram";
        url = "https://www.instagram.com/explore/tags/" + text;
    } else if (commando !== "") {
        alert("Onbekend commando");
        return;
    }

    if (titel && url) {
        window.open(url);
        cardaanmaken(titel, text, url);

        let cards = JSON.parse(localStorage.getItem("cards")) || [];
        cards.push({ title: titel, tekst: text, link: url });
        localStorage.setItem("cards", JSON.stringify(cards));
    }

    document.getElementById("input").value = "";
}

const cardaanmaken = (titel, text, url) => {
    let geschiedenis = document.querySelector(".geschiedenis");
    let card = document.createElement("div");
    card.classList.add("card", titel);

    card.innerHTML = `
        <h4>${titel}</h4>
        <p>${text}</p>
        <button class="card-button" onclick="window.open('${url}', '_blank')">Go!</button>
    `;
    geschiedenis.appendChild(card);
}

const cardUitgeschiedenis = () => {
    let cards = JSON.parse(localStorage.getItem("cards"));
    if (!cards) return;

    for (let card of cards) {
        cardaanmaken(card.title, card.tekst, card.link);
    }
}

window.addEventListener("load", setup);
