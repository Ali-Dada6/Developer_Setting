// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// f1445e562b67b9102d9cf238eae7563b
function showweatherDetails(event) {
      event.preventDefault();
      const city = document.getElementById('city').value;
      const apiKey = 'f1445e562b67b9102d9cf238eae7563b'; // استبدل 'YOUR_API_KEY' بمفتاح API الفعلي الخاص بك
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
       fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        }).catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>فشل في جلب الطقس. يرجى المحاولة مرة أخرى.</p>`;
          });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
