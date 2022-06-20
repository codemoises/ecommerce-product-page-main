var numero = 0;

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

function imagens() {
  const mainImage = document.getElementById('img-p');
  const primaryImage = document.getElementById('img-1');
  const secondaryImage = document.getElementById('img-2');
  const thirdImage = document.getElementById('img-3');
  const fourthImage = document.getElementById('img-4');

  primaryImage.addEventListener('click', click);
  secondaryImage.addEventListener('click', clicktwo);
  thirdImage.addEventListener('click', clickthee);
  fourthImage.addEventListener('click', clickfourth); 
  
  function click() {
    mainImage.src = 'images/image-product-1.jpg';

  }

  function clicktwo() {
    mainImage.src = 'images/image-product-2.jpg';
    
  }

  function clickthee() {
    mainImage.src = 'images/image-product-3.jpg';

  }

  function clickfourth() {
    mainImage.src = 'images/image-product-4.jpg';

  }

}

function addtocart() {
  let price = 250;
  let discount = (50/100);
  let quantity = document.getElementById('num').value;

  var lastPrice = (price * discount) * quantity;

  console.log(lastPrice);

}