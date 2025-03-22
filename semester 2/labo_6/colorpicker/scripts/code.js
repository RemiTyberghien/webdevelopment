const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	let saveButton = document.getElementById("saveButton");
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("input", update);
	}
	saveButton.addEventListener("click", saveColor);



	update();
};



const update = () =>
{
	let rood = document.getElementById('sliderr').value;
	let groen = document.getElementById('sliderg').value;
	let blauw = document.getElementById('sliderb').value;

	let colorDemo = document.getElementsByClassName("colorDemo")[0];
	colorDemo.style.backgroundColor = `rgb(${rood}, ${groen}, ${blauw})`;
};

const saveColor = () => {
	const rood = document.getElementById("sliderr").value;
	const groen = document.getElementById("sliderg").value;
	const blauw = document.getElementById("sliderb").value;

	const save = document.createElement("div");
	save.className = "save";

	const colorSwatch = document.createElement("div");
	colorSwatch.className = "colorSwatch";
	colorSwatch.style.backgroundColor = `rgb(${rood}, ${groen}, ${blauw})`;

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "X";
	deleteButton.className = "deleteButton";
	deleteButton.addEventListener("click", () => save.remove());

	colorSwatch.addEventListener("click", () => {
		document.getElementById("sliderr").value = rood;
		document.getElementById("sliderg").value = groen;
		document.getElementById("sliderb").value = blauw;
		update();
	});


	save.append(colorSwatch, deleteButton);
	document.getElementById("savedColors").appendChild(save);
}


window.addEventListener("load", setup);
