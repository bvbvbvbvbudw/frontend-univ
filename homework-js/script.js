const form = document.getElementById('form-container')

form.addEventListener('submit', function(e){
    e.preventDefault()
    total = document.getElementById('money-input').value * (100 - document.getElementById('discount-input').value) / 100;

    document.getElementById('discount').innerText = 'Discount:' +  document.getElementById('discount-input').value;
    document.getElementById('total').innerText = 'Total:' +  total.toFixed(2);
})