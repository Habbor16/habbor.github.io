/* ==============================================================
   cuenta.js — alterna Iniciar Sesión / Registrarse
   Es solo una maqueta visual: no hay backend ni autenticación
   real (HABBOR es un proyecto local de una sola persona).
============================================================== */
const tabLogin     = document.getElementById('tabLogin');
const tabRegister  = document.getElementById('tabRegister');
const confirmField = document.getElementById('confirmField');
const authSubmit   = document.getElementById('authSubmit');
const authForm     = document.getElementById('authForm');
const params       = new URLSearchParams(window.location.search);

function activarRegistro() {
  tabRegister.classList.add('active');
  tabLogin.classList.remove('active');
  confirmField.classList.remove('hidden');
  authSubmit.textContent = 'Crear cuenta';
}
function activarLogin() {
  tabLogin.classList.add('active');
  tabRegister.classList.remove('active');
  confirmField.classList.add('hidden');
  authSubmit.textContent = 'Iniciar sesión';
}

tabLogin.addEventListener('click', activarLogin);
tabRegister.addEventListener('click', activarRegistro);
if (params.get('modo') === 'registro') activarRegistro();

authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('HABBOR es un proyecto local sin servidor, así que todavía no hay cuentas reales que crear.');
});
