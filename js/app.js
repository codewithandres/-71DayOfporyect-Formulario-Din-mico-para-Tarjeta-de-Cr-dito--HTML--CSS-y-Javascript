const formularioElement = {
	tarjeta: document.querySelector('#tarjeta'),
	btnAbrirFormulario: document.querySelector('#btn-abrir-formulario'),
	formulario: document.querySelector('#formulario-tarjeta'),
};

tarjeta.addEventListener('click', () => tarjeta.classList.toggle('active'));

formularioElement.btnAbrirFormulario.addEventListener('click', () => {
	const { btnAbrirFormulario, formulario } = formularioElement;

	btnAbrirFormulario.classList.toggle('active'),
		formulario.classList.toggle('active');
});

for (let i = 0; i <= 12; i++) {
	let option = document.createElement('option');

	option.value = i;
	option.innerHTML = i;
	formularioElement.formulario.selectMes.appendChild(option);
}

const yearActuala = new Date().getFullYear();
for (let i = yearActuala; i <= yearActuala + 8; i++) {
	const { formulario } = formularioElement;
	let option = document.createElement('option');

	option.value = i;
	option.innerHTML = i;
	formulario.selectYear.appendChild(option);
}

formularioElement.formulario.inputNumero.addEventListener('input', (event) => {
	const { formulario } = formularioElement;
	let valorInput = event.target.value;

	formulario.inputNumero.value = valorInput;
	console.log(valorInput);
});
