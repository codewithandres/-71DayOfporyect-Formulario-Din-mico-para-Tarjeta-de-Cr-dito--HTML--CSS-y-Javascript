const formElement = {
	tarjeta: document.querySelector('#tarjeta'),
	btnAbrirFormulario: document.querySelector('#btn-abrir-formulario'),
	form: document.querySelector('#formulario-tarjeta'),
	numeroTarjeta: document.querySelector('#tarjeta .numero'),
	nombreTarjeta: document.querySelector('#tarjeta .nombre'),
	logoMarca: document.querySelector('#logo-marca'),
	tarjetaFirma: document.querySelector('#tarjeta .firma p'),
	mesExpiracion: document.querySelector('#tarjeta .mes'),
	yearxpiracion: document.querySelector('#tarjeta .year'),
	ccv: document.querySelector('#tarjeta .ccv'),
};

tarjeta.addEventListener('click', () => tarjeta.classList.toggle('active'));

formElement.btnAbrirFormulario.addEventListener('click', () => {
	const { btnAbrirFormulario, form } = formElement;

	btnAbrirFormulario.classList.toggle('active'),
		form.classList.toggle('active');
});

for (let i = 1; i <= 12; i++) {
	let option = document.createElement('option');

	option.value = i;
	option.innerHTML = i;
	formElement.form.selectMes.appendChild(option);
}

const yearActuala = new Date().getFullYear();
for (let i = yearActuala; i <= yearActuala + 8; i++) {
	const { form } = formElement;
	let option = document.createElement('option');

	option.value = i;
	option.innerHTML = i;
	form.selectYear.appendChild(option);
}

const mostrarFrente = () => {
	const { tarjeta } = formElement;

	if (tarjeta.classList.contains('active'))
		tarjeta.classList.toggle('active');
};

formElement.form.inputNumero.addEventListener('input', (event) => {
	const { form, numeroTarjeta, logoMarca } = formElement;
	let valorInput = event.target.value;

	//validacionde input de numer con expreciones regulares
	form.inputNumero.value = valorInput
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

//validacion del canpo nombre
formElement.form.inputNombre.addEventListener('input', (event) => {
	const { form, nombreTarjeta, tarjetaFirma } = formElement;
	let valorInput = event.target.value;

	form.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	tarjetaFirma.textContent = valorInput;

	if (valorInput == '') nombreTarjeta.textContent = 'Jhon Doe';
	mostrarFrente();
});

//select mes
formElement.form.selectMes.addEventListener('change', (event) => {
	const { mesExpiracion } = formElement;

	mesExpiracion.textContent = event.target.value;
});

formElement.form.selectYear.addEventListener('change', (event) => {
	const { yearxpiracion } = formElement;

	yearxpiracion.textContent = event.target.value.slice(2);
	mostrarFrente();
});

// * ccv
formElement.form.inputCCV.addEventListener('input', () => {
	const { tarjeta, form, ccv } = formElement;

	if (!tarjeta.classList.contains('active'))
		tarjeta.classList.toggle('active');

	form.inputCCV.value = form.inputCCV.value
		//eliminar espacios en blanco
		.replace(/\s/g, '')
		.replace(/\D/g, '');

	ccv.textContent = form.inputCCV.value;
});
