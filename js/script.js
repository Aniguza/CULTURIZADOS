// Guardar usuario al registrarse
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

    // Guardar en localStorage
    localStorage.setItem("user", JSON.stringify(user));
    // Redirigir a login
    window.location.href = "../index.html";
}

// Iniciar sesión
function loginUser(event) {
    event.preventDefault();

    const emailInput = document.getElementById("exampleInputEmail1").value.trim();
    const passwordInput = document.getElementById("exampleInputPassword1").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));


    if (emailInput === storedUser.email && passwordInput === storedUser.password) {
        window.location.href = "./html/home.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }
}
