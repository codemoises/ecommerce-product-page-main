numero = 0;

function less() {
  numero--;
  setValue(numero);
}

function more() {
  numero++;
  setValue(numero);
}

function setValue(value) {
  document.getElementById('num').value = value;
}

setValue(numero);