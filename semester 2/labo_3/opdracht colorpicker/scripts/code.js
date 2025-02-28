const setup = () => {
	let sliders = document.getElementsByClassName("slider");

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("input", update);
	}

	update();
};

const update = () => {
	let rood = document.getElementById('sliderr').value;
	let groen = document.getElementById('sliderg').value;
	let blauw = document.getElementById('sliderb').value;

	let colorDemo = document.getElementsByClassName("colorDemo")[0];
	colorDemo.style.backgroundColor = `rgb(${rood}, ${groen}, ${blauw})`;
};


window.addEventListener("load", setup);
