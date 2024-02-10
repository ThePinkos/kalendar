export function sviatky(pocetDni) {
  const sviatkyList = []

    sviatkyList[pocetDni - (pocetDni - 1)] = 'novy rok'
    sviatkyList[pocetDni] = 'silvester'


  return sviatkyList
}

console.log(sviatky(366))
