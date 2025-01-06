document.getElementById('bmi-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid positive values for weight and height.');
        return;
    }

    const bmi = weight / (height * height);

    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<span class="bmi-value">${bmi.toFixed(1)}</span><span class="bmi-category">${category}</span>`;
    resultElement.style.display = 'block';
    resultElement.classList.remove('animate__fadeInUp');
    void resultElement.offsetWidth;
    resultElement.classList.add('animate__fadeInUp');
});
