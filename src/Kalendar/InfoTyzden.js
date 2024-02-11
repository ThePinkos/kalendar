import { meniny } from './Meniny.js'
import { sviatky } from './Sviatky.js'

function doplnTzyden(x) {
  const mappings = { 1: 7, 2: 8, 3: 9, 4: 10, 5: 11, 6: 12, 0: 13 }
  return mappings[x] ?? undefined
}

function getWeekNumber(date) {
  date = new Date(date)
  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + 4 - (date.getDay() || 7))
  var yearStart = new Date(date.getFullYear(), 0, 1)
  var weekNumber = Math.ceil(((date - yearStart) / 86400000 + 1) / 7)

  return weekNumber
}

function getDayNumber(date) {
  var start = new Date(date.getFullYear(), 0, 0)
  var diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000
  var oneDay = 1000 * 60 * 60 * 24
  var dayNumber = Math.floor(diff / oneDay)

  return dayNumber
}
export function getMaxDays(year) {
  return getDayNumber(new Date(year, 11, 31))
}

function getWeekday(date) {
  var daysOfWeekSlovak = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota', 'Nedeľa']
  var weekday = (date.getDay() + 6) % 7

  return daysOfWeekSlovak[weekday]
}

function getDayNumberInMonth(date) {
  var dayOfMonth = date.getDate()
  return dayOfMonth
}

function getMonthName(date) {
  var options = { month: 'long' }
  var monthName = date.toLocaleString('sk-SK', options)

  return monthName
}

function getYear(date) {
  var yearArray = date.getFullYear()

  return yearArray
}

function sviatkyArray(year) {
  const last10Indexes = sviatky(year - 1).slice(-doplnTzyden(new Date(year, 0, 1).getDay()))
  const first10Indexes = sviatky(year + 1).slice(
    0,
    20 - doplnTzyden(new Date(year, 11, 31).getDay())
  )
  const resultArray = [...last10Indexes, ...meniny(year), ...first10Indexes]

  return resultArray
}

function meninyArray(year) {
  const last10Indexes = meniny(getMaxDays(year)).slice(-doplnTzyden(new Date(year, 0, 1).getDay()))
  const first10Indexes = meniny(getMaxDays(year - 1)).slice(
    0,
    20 - doplnTzyden(new Date(year, 11, 31).getDay())
  )
  const resultArray = [...last10Indexes, ...meniny(getMaxDays(year)), ...first10Indexes]

  return resultArray
}

// Example usage:
export function kalendar(year) {
  let infoArray = []
  const sviatkyArray = sviatky(getMaxDays(year))

  const start = 1 - doplnTzyden(new Date(year, 0, 1).getDay())
  const end = getMaxDays(year) + 20 - doplnTzyden(new Date(year, 11, 31).getDay())

  for (let i = start; i <= end; i++) {
    var zaciatok = new Date(year, 0, i)

    var weekdaySlovak = getWeekday(zaciatok)
    var weekNumber = getWeekNumber(zaciatok)
    var dayNumber = getDayNumber(zaciatok)
    var dayNumberInMonth = getDayNumberInMonth(zaciatok)
    var monthName = getMonthName(zaciatok)
    monthName = monthName[0].toUpperCase() + monthName.slice(1)
    var yearNumber = getYear(zaciatok)

    infoArray.push([
      dayNumberInMonth,
      weekdaySlovak,
      dayNumber,
      weekNumber,
      monthName,
      yearNumber,
    ])
  }

  infoArray = infoArray[0].map((_, index) => infoArray.map((arr) => arr[index]))
  infoArray.push(meninyArray(year))

  return infoArray
}

console.log(kalendar(2024))
