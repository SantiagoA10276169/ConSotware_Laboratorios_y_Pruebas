const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");
const feedback = document.getElementById("feedback");

const valida_passwords = () => {

  let mensajeError = "";

  if(password.value != confirm_password.value) {
    mensajeError += "Las contraseñas no coinciden";
  } else {
    mensajeError = "";
  }

  feedback.innerHTML = mensajeError;
}

password.onkeyup = valida_passwords;
confirm_password.onkeyup = valida_passwords;