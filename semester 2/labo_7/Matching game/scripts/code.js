let kaarten = [];
let omgedraaideKaarten = [];
let isBusy = false;


const kaartAfbeeldingen = [
    './Images/kaart1.jpg', './Images/kaart2.jpg', './Images/kaart3.jpg', './Images/kaart4.jpg',
    './Images/kaart5.jpg', './Images/kaart6.jpg'
];


const genereerBord = () => {
    const board = document.getElementById('board');
    kaarten = [];


    let afbeeldingen = [...kaartAfbeeldingen, ...kaartAfbeeldingen];
    afbeeldingen = afbeeldingen.sort(() => 0.5 - Math.random());
    afbeeldingen.forEach((afbeelding) => {
        const kaart = document.createElement('div');
        kaart.classList.add('card');
        kaart.innerHTML = `<img src="${afbeelding}" alt="Card Image">`;
        kaart.addEventListener('click', flipCard);
        board.appendChild(kaart);
        kaarten.push(kaart);
    });
}


const  flipCard = (event) => {
    if (isBusy || event.target.classList.contains('flipped')) return;

    const kaart = event.currentTarget;
    kaart.classList.add('flipped');
    omgedraaideKaarten.push(kaart);

    if (omgedraaideKaarten.length === 2) {
        isBusy = true;
        checkForMatch();
    }
}

const checkForMatch = () => {
    const [kaart1, kaart2] = omgedraaideKaarten;
    const afbeelding1 = kaart1.querySelector('img').src;
    const afbeelding2 = kaart2.querySelector('img').src;

    if (afbeelding1 === afbeelding2) {
        setTimeout(() => {
            kaart1.style.visibility = 'hidden';
            kaart2.style.visibility = 'hidden';
            reset();
        }, 500);
    } else {
        setTimeout(() => {
            kaart1.classList.remove('flipped');
            kaart2.classList.remove('flipped');
            reset();
        }, 1000);
    }
}

const reset = () => {
    omgedraaideKaarten = [];
    isBusy = false;

    if (kaarten.every(kaart => kaart.style.visibility === 'hidden')) {
        setTimeout(() => alert('Gefeliciteerd, je hebt gewonnen!'), 500);
    }
}

window.addEventListener('load', genereerBord)
