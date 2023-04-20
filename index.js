/**
 * Agregando atributo placeholder y maxlength
 */
const agregarAtributosHTML = () => {
  let miInput = document.getElementById("miInput");
  miInput.setAttribute("placeholder", "Ingrese su nombre");
  miInput.setAttribute("maxlength", "50");
  miInput.setAttribute("value", "HolaMundo");
};

/**
 * Eliminando atributo required
 */
const eliminarAtributoHTML = () => {
  let miInput = document.querySelector("#miInput_2");
  miInput.removeAttribute("required");
};

/**
 * Eliminar atributo HTML
 */
const eliminarAtributosHTML_Caso2 = () => {
  let miInput = document.querySelector("#miInput_3");
  console.log(miInput);
  miInput.removeAttribute("placeholder");
  miInput.removeAttribute("maxlength");
};

/**
 * Habilitar Input
 */
const habilitarInput = () => {
  let miInput = document.querySelector("#miInput_disabled");
  miInput.removeAttribute("disabled");
};

/**
 * Desabilitar Input
 */
function deshabilitarCampo() {
  let miInput = document.querySelector("#miInput_desab");
  miInput.disabled = true;
  miInput.setAttribute("readonly", "readonly");
}

/**
 * Habilitar y Desahilitar Button
 */
const habilitarDesabilitar = () => {
  let miBoton = document.querySelector("#miBoton");
  // Deshabilitar el botón
  miBoton.disabled = false;

  //Otra forma que funciona como un Switch
  /*
  if (miBoton.disabled) {
    miBoton.disabled = false; // Habilitar el botón
  } else {
    miBoton.disabled = true; // Deshabilitar el botón
  }
  */
};

/**
 * Mostar Ocultar
 */
const toggleBtn = document.querySelector("#mostrar_ocultar");
const contenido = document.querySelector(".contenido");

toggleBtn.addEventListener("click", function () {
  contenido.style.display === "none"
    ? (contenido.style.display = "block")
    : (contenido.style.display = "none");
});
