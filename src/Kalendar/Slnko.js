import SunCalc from 'suncalc'

// Bratislava's coordinates
const zemSirka = 49.2231
const zemDlzka = 18.7394

// Get today's date
const today = new Date(2024, 7, 22)

// Calculate sunrise, solar noon, and sunset
const sunTimes = SunCalc.getTimes(today, zemSirka, zemDlzka)

// Format the times in the Bratislava timezone (CET)
const formatTime = (date) => date.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Europe/Bratislava' })

const sunrise = formatTime(sunTimes.sunrise)
const solarNoon = formatTime(sunTimes.solarNoon)
const sunset = formatTime(sunTimes.sunset)

console.log(`Sunrise: ${sunrise}`)
console.log(`Solar Noon: ${solarNoon}`)
console.log(`Sunset: ${sunset}`)
