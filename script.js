const API_KEY = "fb9a61c84bdb97fe871f6b7e670fb123";

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        result.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>🌡️ Temperature: ${data.main.temp}°C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>☁️ Condition: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        result.innerHTML = `<p>❌ ${error.message}</p>`;
    }
}
