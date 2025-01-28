window.addEventListener('load', () => {
    let long;
    let lat;
    const apiKey = "d788ca0168df74aeb18ff31a2252fb2e";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

            fetch(api)
                .then(response => response.json())
                .then(data => {
                    const { temp } = data.main;
                    const weatherDescription = data.weather[0].description;
                    const timezone = data.name;
                    const weatherIcon = data.weather[0].icon;

                    // Updating DOM elements
                    document.querySelector('.temperature-degree').textContent = Math.round(temp);
                    document.querySelector('.temperature-description').textContent = weatherDescription;
                    document.querySelector('.location-timezone').textContent = timezone;
                    document.querySelector('.weather-icon').textContent = `🌡️`;

                    // Adding Celsius/Fahrenheit toggle
                    const degreeSection = document.querySelector('.degree-section');
                    const degreeSpan = document.querySelector('.degree-section span');
                    let isCelsius = true;

                    degreeSection.addEventListener('click', () => {
                        if (isCelsius) {
                            let fahrenheit = (temp * 9/5) + 32;
                            document.querySelector('.temperature-degree').textContent = Math.round(fahrenheit);
                            degreeSpan.textContent = "°F";
                            isCelsius = false;
                        } else {
                            document.querySelector('.temperature-degree').textContent = Math.round(temp);
                            degreeSpan.textContent = "°C";
                            isCelsius = true;
                        }
                    });
                })
                .catch(error => console.error('Error fetching weather data:', error));
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
});
