const formulario = document.querySelector('#form-venta');
formulario.addEventListener('submit', event => {
  event.preventDefault();
});

const cantidad = document.querySelector('#inputCantidad');
const categoria = document.querySelector('#inputSelect');
const total = document.querySelector("#total");

function borrarForm() {
  formulario.reset();
  total.textContent = "Total a pagar: $";
}

function imprimir(resumen) {
  total.textContent += resumen;
}

function descuento() {
  let valorTicket = 200;
  if (categoria.value == '0') {
    valorTicket = valorTicket - (valorTicket * 0.8);

  } else {
    if (categoria.value == '1') {
      valorTicket = valorTicket - (valorTicket * 0.5);
    } else {
      valorTicket = valorTicket - (valorTicket * 0.15);
    }
  }
  let resumen = valorTicket * Number(cantidad.value);
  imprimir(resumen);
}

const btnResumen = document.querySelector("#btn-resumen");
btnResumen.addEventListener("click", descuento);

const btnBorrar = document.querySelector("#btn-borrar");
btnBorrar.addEventListener("click", borrarForm);





