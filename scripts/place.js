
// Static values for temperature (°C) and wind speed (km/h)
const temperature = 1;       // Example: 5 °C
const windSpeed = 40;        // Example: 20 km/h

// One-line windchill calculation function for Celsius
function calculateWindChill(tempC, windKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  );
}

// Run this when the page loads
window.addEventListener("DOMContentLoaded", () => {
    const windChillElement = document.querySelector("#windchill");
    const conditionsElement = document.querySelector("#weather-conditions");
    const weatherElement = document.querySelector("#weather-temp");
    const windSpeedElement = document.querySelector("#wind");
    
    weatherElement.textContent = `${temperature} °C`;
    conditionsElement.textContent = `Sunny`;
    windSpeedElement.textContent = `${windSpeed} km/h`;

  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    // windChillElement.innerHTML = `Temperature: ${temperature} <br> Windchill: ${windChill.toFixed(1)} °C`;
    windChillElement.textContent = `${windChill.toFixed(1)} °C`;

  } else {
    windChillElement.textContent = "Windchill: N/A";
  }
});

