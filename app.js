function login() {
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorDiv = document.getElementById("errorMessage");

  if (phone.length !== 8 || isNaN(phone)) {
    errorDiv.textContent = "Número inválido (8 dígitos requeridos)";
    return;
  }

  if (password.length < 4) {
    errorDiv.textContent = "PIN muy corto (mínimo 4 caracteres)";
    return;
  }

  if (phone === "86289853" && password === "1401") {
    mostrarPantalla("pantalla-principal");
  } else {
    errorDiv.textContent = "Número o PIN incorrectos";
  }
}

function mostrarPantalla(id) {
  const pantallas = document.querySelectorAll(".pantalla");
  pantallas.forEach(p => p.classList.remove("activa"));
  document.getElementById(id).classList.add("activa");
}

function enviarTransferencia() {
  const destino = document.getElementById("destino").value.trim();
  const monto = document.getElementById("monto").value.trim();

  if (destino.length !== 8 || isNaN(destino)) {
    alert("Número de destino inválido.");
    return;
  }

  const montoNumerico = parseFloat(monto);
  if (isNaN(montoNumerico) || montoNumerico <= 0) {
    alert("Ingrese un monto válido.");
    return;
  }

  alert("Transferencia de C$ " + montoNumerico.toFixed(2) + " enviada a " + destino);
  mostrarPantalla("pantalla-principal");
}