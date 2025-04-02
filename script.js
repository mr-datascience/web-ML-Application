const predictButton = document.getElementById('predictButton');
const featuresInput = document.getElementById('features');
const resultDiv = document.getElementById('result');

predictButton.addEventListener('click', () => {
    const features = featuresInput.value.split(',').map(Number);
    fetch('YOUR_HEROKU_APP_URL/predict', { // Replace with your Heroku app URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ features: features })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            resultDiv.textContent = `Error: ${data.error}`;
        } else {
            resultDiv.textContent = `Prediction: ${data.prediction}`;
        }

    })
    .catch(error => {
        resultDiv.textContent = `Error: ${error}`;
    });
});
