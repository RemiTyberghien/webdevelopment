const setup = () => {
    let listItems = document.querySelectorAll("li");
    listItems.forEach(item => {
        item.classList.add("listitem");
    });

    const body = document.querySelector("body");
    const img = document.createElement("img");
    img.setAttribute("src", "../oefening2/images/sierra_rs_cosworth.jpg");
    img.setAttribute("alt","ford sierra rs cosworth van francois delecour");
    body.appendChild(img);
}
window.addEventListener("load", setup);