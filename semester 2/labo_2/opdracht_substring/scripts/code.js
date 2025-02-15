const setup = () => {
    document.getElementById("substring").addEventListener("click", () => {
        const input = document.getElementById("input").value;

        const eerstecijfer = parseInt(document.getElementById("eerstecijfer").value);

        const tweedecijfer = parseInt(document.getElementById("tweedecijfer").value);

        document.getElementById("output").textContent = eerstecijfer >= 0 && tweedecijfer > eerstecijfer && tweedecijfer <= input.length
            ? input.substring(eerstecijfer, tweedecijfer)
            : "(geen output)";

    });
}
window.addEventListener("load", setup);