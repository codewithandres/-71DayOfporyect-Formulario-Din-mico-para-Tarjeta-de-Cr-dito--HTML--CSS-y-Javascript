const formElement = {
	tarjeta: document.querySelector('#tarjeta'),
	btnAbrirFormulario: document.querySelector('#btn-abrir-formulario'),
	formulario: document.querySelector('#formulario-tarjeta'),
	numeroTarjeta: document.querySelector('#tarjeta .numero'),
	nombreTarjeta: document.querySelector('#tarjeta .nombre'),
	logoMarca: document.querySelector('#logo-marca'),
};

tarjeta.addEventListener('click', () => tarjeta.classList.toggle('active'));

formElement.btnAbrirFormulario.addEventListener('click', () => {
	const { btnAbrirFormulario, formulario } = formElement;

	btnAbrirFormulario.classList.toggle('active'),
		formulario.classList.toggle('active');
});

for (let i = 0; i <= 12; i++) {
	let option = document.createElement('option');

	option.value = i;
	option.innerHTML = i;
	formElement.formulario.selectMes.appendChild(option);
}

const yearActuala = new Date().getFullYear();
for (let i = yearActuala; i <= yearActuala + 8; i++) {
	const { formulario } = formElement;
	let option = document.createElement('option');

	option.value = i;
	option.innerHTML = i;
	formulario.selectYear.appendChild(option);
}

const mostrarFrente = () => {
	const { tarjeta } = formElement;

	if (tarjeta.classList.contains('active'))
		tarjeta.classList.toggle('active');
};

formElement.formulario.inputNumero.addEventListener('input', (event) => {
	const { formulario, numeroTarjeta, logoMarca } = formElement;
	let valorInput = event.target.value;
	//validacionde input de numer con expreciones regulares
	formulario.inputNumero.value = valorInput
		.replace(/\s/g, '')
		.replace(/\D/g, '')
		.replace(/([0-9]{4})/g, '$1 ')
		.trim();

	numeroTarjeta.textContent = valorInput;

	if (valorInput == '') {
		numeroTarjeta.textContent = '#### #### #### ####';
		logoMarca.innerHTML = '';
	}

	if (valorInput.at(0) == 4) {
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'assets/logos/visa.png';
		logoMarca.appendChild(imagen);
	}

	if (valorInput.at(0) == 5) {
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'assets/logos/mastercard.png';
		logoMarca.appendChild(imagen);
	}
	//para mostrar el frente de la tarjeta
	mostrarFrente();
});
