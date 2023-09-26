const discountInput = document.getElementById('discount-input');
const moneyInput = document.getElementById('money-input')
const form = document.getElementById('form-container')

form.addEventListener('submit', function(e){
    e.preventDefault()
    total = moneyInput.value * ( 100 - discountInput.value ) / 100;

    document.getElementById('discount').innerText = 'Discount:' +  discountInput.value;
    document.getElementById('total').innerText = 'Total:' +  total; // .toFixed(2)
})