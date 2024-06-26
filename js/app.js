const tarjeta = document.querySelector('#tarjeta');
const btnAbrirFormulario = document.querySelector('#btn-abrir-formulario');
const formulario = document.querySelector('#formulario-tarjeta');

tarjeta.addEventListener('click', () => tarjeta.classList.toggle('active'));

btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active'),
		formulario.classList.toggle('active');
});

for (let i = 0; i <= 12; i++) {
	let option = document.createElement('option');
	option.value = i;
	option.innerHTML = i;
	formulario.selectMes.appendChild(option);
}

const yearActuala = new Date().getFullYear();
for (let i = yearActuala; i <= yearActuala + 8; i++) {
	let option = document.createElement('option');
	option.value = i;
	option.innerHTML = i;
	formulario.selectYear.appendChild(option);
}
