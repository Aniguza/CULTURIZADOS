window.addEventListener("DOMContentLoaded", function () {
    //--------Cerrar sesión------------------
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.setItem("sesionActiva", "false"); // Solo marca como cerrada
            window.location.href = "../index.html";
        });
    }

    //--------Mostrar contraseña---------------
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("exampleInputPassword1");

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", function () {
            const type = passwordInput.type === "password" ? "text" : "password";
            passwordInput.type = type;
            this.classList.toggle("fa-eye");
            this.classList.toggle("fa-eye-slash");
        });
    }

    //--------Validar si hay sesión en páginas protegidas------------------
    const user = localStorage.getItem("user");
    const sesionActiva = localStorage.getItem("sesionActiva") === "true";
    const isOnHome = window.location.pathname.includes("home.html");

    if ((!user || !sesionActiva) && isOnHome) {
        // Redirige al login si no hay usuario o sesión cerrada
        window.location.href = "../index.html";
    }
});

//--------Guardar usuario al registrarse------------------
function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const code = document.getElementById("countryCode").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !phone || !password) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const user = {
        name,
        email,
        phone: code + phone,
        password
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("sesionActiva", "true");
    window.location.href = "../index.html";
}

//--------Iniciar sesión------------------
function loginUser(event) {
    event.preventDefault();

    const emailInput = document.getElementById("exampleInputEmail1").value.trim();
    const passwordInput = document.getElementById("exampleInputPassword1").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && emailInput === storedUser.email && passwordInput === storedUser.password) {
        localStorage.setItem("sesionActiva", "true");
        window.location.href = "./html/home.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }
}
