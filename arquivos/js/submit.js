const form = document.querySelector('#reporte');
const inputs = document.querySelectorAll('input')
form.addEventListener('submit', function(e) {
    e.preventDefault();
    inputs.forEach(element => {
        console.log(element.value)
    });
});