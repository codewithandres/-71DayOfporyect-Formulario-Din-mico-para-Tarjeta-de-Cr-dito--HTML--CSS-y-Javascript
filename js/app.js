const tarjeta = document.querySelector('.contenedor');

tarjeta.addEventListener('click', () => {
	tarjeta.querySelector('#tarjeta').classList.toggle('active');
});
