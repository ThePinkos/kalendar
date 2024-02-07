import { meniny } from './Meniny.js'
import { sviatky } from './Sviatky.js'

function kolkoJeDniVRoku(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 366 : 365
}

function doplnTzyden(x) {
  const mappings = { 1: 7, 2: 8, 3: 9, 4: 10, 5: 11, 6: 12, 0: 13 }
  return mappings[x] ?? undefined
}

function velkePismeno(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function vytvorArrayVsetkeho(year, start, end) {
  const kalendarArray = []
  const meninyArray = meniny(kolkoJeDniVRoku(year))
  const sviatkyArray = sviatky(kolkoJeDniVRoku(year))

  for (let i = start; i <= end; i++) {
    // 1. január
    const currentDate = new Date(year, 0, 1)
    currentDate.setDate(i)

    const dayNumber = currentDate.toLocaleDateString('en', { day: 'numeric' })
    const dayInfo = velkePismeno(currentDate.toLocaleDateString('sk-SK', { weekday: 'long' }))
    const month = velkePismeno(currentDate.toLocaleDateString('sk-SK', { month: 'long' }))
    const oyear = currentDate.toLocaleDateString('sk-SK', { year: 'numeric' })

    kalendarArray.push([dayNumber, dayInfo, month, oyear, meninyArray[i - 1], i])
  }

  return kalendarArray
}

export function kalendar(year) {
  const previousYearDays = vytvorArrayVsetkeho(
    year - 1,
    kolkoJeDniVRoku(year - 1) + 1 - doplnTzyden(new Date(year, 0, 1).getDay()),
    kolkoJeDniVRoku(year - 1)
  )
  const currentYearDays = vytvorArrayVsetkeho(year, 1, kolkoJeDniVRoku(year))
  const nextYearDays = vytvorArrayVsetkeho(
    year + 1,
    1,
    20 - doplnTzyden(new Date(year, 11, 31).getDay())
  )

  const kalendarArray = [...previousYearDays, ...currentYearDays, ...nextYearDays]

  return kalendarArray[0].map((_, index) => kalendarArray.map((arr) => arr[index]))
}

console.log(kalendar(2024))
