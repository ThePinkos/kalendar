import { meniny } from './Meniny.js'
//import { sviatky } from './Sviatky.js'

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

function getMonthName(year, start) {
  var monthArray = [];
  let firstDay
  let lastDay

  for (let i = -1; i < 54; i++) {
      firstDay = new Date(year, 0, start + (i * 7 + 7));
      lastDay = new Date(year, 0, start + (i * 7 + 13));

    let firstMonth = firstDay.toLocaleDateString("sk-SK", { month: "long" });
    let lastMonth = lastDay.toLocaleDateString("sk-SK", { month: "long" });

    firstMonth = firstMonth[0].toUpperCase() + firstMonth.slice(1);
    lastMonth = lastMonth[0].toUpperCase() + lastMonth.slice(1);

    if (firstMonth !== lastMonth) {
      monthArray.push(firstMonth + '/' + lastMonth);
    } else {
      monthArray.push(firstMonth);
    }
  }

  return monthArray;
}

function getYear(year) {
  var yearArray = []
  var nextYear = year - (-1)
  var beforeYear = year - 1

  for (let i = 0; i <= 54; i++) {
    var yearNumber = new Date(year, 0, i * 7).getFullYear()
    yearArray.push(yearNumber)
  }

  yearArray[1] = new Date(year, 0, 1).getDay() === 1 ? year : beforeYear + '/' + year.toString().slice(-2);
  yearArray[53] = new Date(year, 11, 31).getDay() === 0 ? year : year + '/' + nextYear.toString().slice(-2);

  return yearArray
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

  const start = 1 - doplnTzyden(new Date(year, 0, 1).getDay())
  const end = getMaxDays(year) + 20 - doplnTzyden(new Date(year, 11, 31).getDay())

  for (let i = start; i <= end; i++) {
    var zaciatok = new Date(year, 0, i)

    var weekdaySlovak = getWeekday(zaciatok)
    var weekNumber = getWeekNumber(zaciatok)
    var dayNumber = getDayNumber(zaciatok)
    var dayNumberInMonth = getDayNumberInMonth(zaciatok)

    infoArray.push([dayNumberInMonth, weekdaySlovak, dayNumber, weekNumber])
  }

  infoArray = infoArray[0].map((_, index) => infoArray.map((arr) => arr[index]))
  infoArray.push(getMonthName(year, start))
  infoArray.push(meninyArray(year))
  infoArray.push(getYear(year))

  console.log(start)

  return infoArray
}

console.log(kalendar(2024))
