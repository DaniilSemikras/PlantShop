const addToCartButtons = document.querySelectorAll('.best-products__flowers-add');
const cartNumberElement = document.querySelector('.header__cart-number');
let cartNumber = localStorage.getItem('cartNumber') || 0;
cartNumberElement.textContent = cartNumber;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartNumber++;
    cartNumberElement.textContent = cartNumber;
    localStorage.setItem('cartNumber', cartNumber);
  });
});
