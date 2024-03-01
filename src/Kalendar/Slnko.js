import SunCalc from 'suncalc'

function d(date) {
  var start = new Date(date.getFullYear(), 0, 0)
  var diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000
  var oneDay = 1000 * 60 * 60 * 24
  var dayNumber = Math.floor(diff / oneDay)

  return dayNumber - 1
}

export function slnko(zemSirka, zemDlzka) {
  // Bratislava's coordinates
  zemSirka = 49.2231
  zemDlzka = 18.7394

  // Get today's date
  const today = new Date(2024, 7, 22)

  // Calculate sunrise, solar noon, and sunset
  const sunTimes = SunCalc.getTimes(today, zemSirka, zemDlzka)

  // Format the times in the Bratislava timezone (CET)
  const formatTime = (date) => date.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Europe/Bratislava' })

  const sunrise = formatTime(sunTimes.sunrise)
  const solarNoon = formatTime(sunTimes.solarNoon)
  const sunset = formatTime(sunTimes.sunset)

  return sunrise
}



console.log(slnko())
