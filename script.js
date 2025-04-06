document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');
    const closeLogin = document.getElementById('close-login');
    const closeRegister = document.getElementById('close-register');

    // Inicializar ocultando los modales al cargar la página
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';

    // Funcionalidad para mostrar el modal de "Iniciar Sesión"
    loginButton.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });

    // Funcionalidad para mostrar el modal de "Registrarse"
    registerButton.addEventListener('click', () => {
        registerModal.style.display = 'flex';
    });

    // Funcionalidad para cerrar el modal de "Iniciar Sesión"
    closeLogin.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Funcionalidad para cerrar el modal de "Registrarse"
    closeRegister.addEventListener('click', () => {
        registerModal.style.display = 'none';
    });

    // Cerrar los modales haciendo clic fuera del contenido del cuadro
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
});
