const setup = () => {
}
let tekst = 'onoorbaar'
let trigramen = []

for (let i = 0; i < tekst.length-2; i++)
{
    trigramen += tekst.slice(i,i+3);
    trigramen += ' ';

}
console.log(trigramen);
window.addEventListener("load", setup);