function d(date) {
  var start = new Date(date.getFullYear(), 0, 0)
  var diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000
  var oneDay = 1000 * 60 * 60 * 24
  var dayNumber = Math.floor(diff / oneDay)

  return dayNumber - 1
}

export function sviatky(pocetDni, year) {
  let sviatkyList = []

  for (let i = 0; i < pocetDni; i++) {
    sviatkyList[i] = undefined
  }

  //Statne sviatky

  sviatkyList[d(new Date(year, 0, 1))] = 'novy rok'
  sviatkyList[d(new Date(year, 2, 7))] = 'Meniny - Tomáš Kubík'
  sviatkyList[d(new Date(year, 11, 31))] = 'silvester'

  return sviatkyList
}

export function mena(pocetDni, year) {
  let menaList = []

  for (let i = 0; i < pocetDni; i++) {
    menaList[i] = undefined
  }

  // Narodeniny
  menaList[d(new Date(year, 0, 1))] = 'novy rok'
  menaList[d(new Date(year, 11, 31))] = 'silvester'

  // Meniny
  menaList[d(new Date(year, 2, 7))] = 'Meniny - Tomáš Kubík'
  menaList[d(new Date(year, 11, 24))] = 'Meniny - Adam Kubík'

  return menaList
}
