const temperatureC = 5;
const windSpeedKmh = 20;


function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}


const windChillC = (temperatureC <= 10 && windSpeedKmh > 4.8)
    ? `${calculateWindChill(temperatureC, windSpeedKmh)} °C`
    : "N/A";

document.getElementById("windChill").textContent = windChillC;