// Objeto que contiene referencias a los elementos del formulario y la tarjeta
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

// Añade un evento para alternar la clase 'active' al hacer clic en la tarjeta
formElement.tarjeta.addEventListener('click', () =>
	formElement.tarjeta.classList.toggle('active'),
);

// Añade un evento para abrir/cerrar el formulario al hacer clic en el botón
formElement.btnAbrirFormulario.addEventListener('click', () => {
	const { btnAbrirFormulario, form } = formElement;
	btnAbrirFormulario.classList.toggle('active');
	form.classList.toggle('active');
});

// Añade opciones de mes al selector de mes en el formulario
for (let i = 1; i <= 12; i++) {
	let option = document.createElement('option');
	option.value = i;
	option.innerHTML = i;
	formElement.form.selectMes.appendChild(option);
}

// Añade opciones de año al selector de año en el formulario
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
	const { form } = formElement;
	let option = document.createElement('option');
	option.value = i;
	option.innerHTML = i;
	form.selectYear.appendChild(option);
}

// Función para mostrar el frente de la tarjeta
const mostrarFrente = () => {
	const { tarjeta } = formElement;
	if (tarjeta.classList.contains('active'))
		tarjeta.classList.toggle('active');
};

// Evento para formatear y validar el número de tarjeta al escribir
formElement.form.inputNumero.addEventListener('input', (event) => {
	const { form, numeroTarjeta, logoMarca } = formElement;
	let valorInput = event.target.value;

	// Formatea el número de tarjeta
	form.inputNumero.value = valorInput
		.replace(/\s/g, '') // Elimina espacios
		.replace(/\D/g, '') // Elimina caracteres no numéricos
		.replace(/([0-9]{4})/g, '$1 ') // Añade un espacio cada 4 dígitos
		.trim();

	numeroTarjeta.textContent = valorInput;

	// Muestra un texto por defecto si el campo está vacío
	if (valorInput == '') {
		numeroTarjeta.textContent = '#### #### #### ####';
		logoMarca.innerHTML = '';
	}

	// Muestra el logo de la marca de la tarjeta según el primer dígito
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

	// Muestra el frente de la tarjeta
	mostrarFrente();
});

// Evento para validar el campo de nombre al escribir
formElement.form.inputNombre.addEventListener('input', (event) => {
	const { form, nombreTarjeta, tarjetaFirma } = formElement;
	let valorInput = event.target.value;

	// Elimina números del nombre
	form.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	tarjetaFirma.textContent = valorInput;

	// Muestra un texto por defecto si el campo está vacío
	if (valorInput == '') nombreTarjeta.textContent = 'Jhon Doe';
	mostrarFrente();
});

// Evento para actualizar el mes de expiración al cambiar el selector
formElement.form.selectMes.addEventListener('change', (event) => {
	const { mesExpiracion } = formElement;
	mesExpiracion.textContent = event.target.value;
});

// Evento para actualizar el año de expiración al cambiar el selector
formElement.form.selectYear.addEventListener('change', (event) => {
	const { yearxpiracion } = formElement;
	yearxpiracion.textContent = event.target.value.slice(2);
	mostrarFrente();
});

// Evento para validar y mostrar el CCV al escribir
formElement.form.inputCCV.addEventListener('input', () => {
	const { tarjeta, form, ccv } = formElement;

	// Muestra el reverso de la tarjeta si no está activo
	if (!tarjeta.classList.contains('active'))
		tarjeta.classList.toggle('active');

	// Elimina espacios y caracteres no numéricos del CCV
	form.inputCCV.value = form.inputCCV.value
		.replace(/\s/g, '') // Elimina espacios
		.replace(/\D/g, ''); // Elimina caracteres no numéricos

	ccv.textContent = form.inputCCV.value;
});
