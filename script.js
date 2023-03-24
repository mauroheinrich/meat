const form = document.querySelector('#form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const M = parseFloat(document.querySelector('#M').value);
	const PA = parseFloat(document.querySelector('#PA').value);
	const TP = parseFloat(document.querySelector('#TP').value);
	const ATER = parseFloat(document.querySelector('#ATER').value);
	const CC = parseFloat(document.querySelector('#CC').value);

	const UCL = M + (TP * 100) + ((PA * 0.75) * 6) + ATER + CC;
	const MEAT = ((PA + (UCL / 100)) / 2) * 1.10;

	resultado.innerHTML = `El Mínimo Ético es de $${MEAT.toFixed(2)}`;
});
