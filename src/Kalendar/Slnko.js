import SunCalc from 'suncalc'

// Bratislava's coordinates
const latitude = 49.2231
const longitude = 18.7394

// Get today's date
const today = new Date(2024, 7, 22)

// Calculate sunrise, solar noon, and sunset
const sunTimes = SunCalc.getTimes(today, latitude, longitude)

// Format the times in the Bratislava timezone (CET)
const formatTime = (date) => date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Europe/Bratislava' })

const sunrise = formatTime(sunTimes.sunrise)
const solarNoon = formatTime(sunTimes.solarNoon)
const sunset = formatTime(sunTimes.sunset)

console.log(`Sunrise: ${sunrise}`)
console.log(`Solar Noon: ${solarNoon}`)
console.log(`Sunset: ${sunset}`)
