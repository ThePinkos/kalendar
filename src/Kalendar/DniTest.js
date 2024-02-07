import { meniny } from './Meniny.js'

// Function to calculate the number of days in a given year
function daysInYear(year) {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  return isLeapYear ? 366 : 365
}

// Function to complete the week with missing days
function completeWeek(x) {
  const mappings = { 1: 7, 2: 8, 3: 9, 4: 10, 5: 11, 6: 12, 0: 13 }
  return mappings[x] ?? undefined
}

// Function to display the calendar
export function kalendar(year) {
  const dayNumberArray = []
  const dayInfoArray = []
  const monthArray = []
  const yearArray = []
  const meninyArray = []
  const dayInYear = []
  const men = meniny(daysInYear(year))

  const getDays = (year, start, end) => {
    for (let i = start; i <= end; i++) {
      const currentDate = new Date(year, 0, 1)
      currentDate.setDate(i)

      const dayNumber = currentDate.toLocaleDateString('en', { day: 'numeric' })
      const dayInfo = currentDate.toLocaleDateString('sk-SK', {
        weekday: 'long'
      })
      const month = currentDate
        .toLocaleDateString('sk-SK', {
          month: 'long'
        })
        .replace(/^\w/, (c) => c.toUpperCase())
      const oyear = currentDate.toLocaleDateString('sk-SK', {
        year: 'numeric'
      })

      dayInYear.push(i)
      meninyArray.push(men[i - 1])
      dayNumberArray.push(dayNumber)
      dayInfoArray.push(dayInfo)
      monthArray.push(month)
      yearArray.push(oyear)
    }

    return [dayNumberArray, dayInfoArray, monthArray, yearArray, meninyArray, dayInYear]
  }

  const previousYearDays = getDays(
    year - 1,
    daysInYear(year - 1) + 1 - completeWeek(new Date(year, 0, 1).getDay()),
    daysInYear(year - 1)
  )
  const currentYearDays = getDays(year, 1, daysInYear(year))
  const nextYearDays = getDays(year + 1, 1, 20 - completeWeek(new Date(year, 11, 31).getDay()))

  //
  //Arrays
  dayNumberArray.push(...previousYearDays[0], ...currentYearDays[0], ...nextYearDays[0])
  dayInfoArray.push(...previousYearDays[1], ...currentYearDays[1], ...nextYearDays[1])
  monthArray.push(...previousYearDays[2], ...currentYearDays[2], ...nextYearDays[2])
  yearArray.push(...previousYearDays[3], ...currentYearDays[3], ...nextYearDays[3])
  dayInYear.push(...previousYearDays[4], ...currentYearDays[4], ...nextYearDays[4])

  return [dayNumberArray, dayInfoArray, monthArray, yearArray, meninyArray, dayInYear]
}

// console.log(kalendar(2024))
