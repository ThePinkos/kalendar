export function sviatky(pocetDni) {
    const sviatkyList = []

    sviatkyList[1 - 1] = "Vznik slovenskej republiky"

    if (pocetDni === 365) {
        return sviatkyList.filter((x) => x !== 'Radomír')
      } else pocetDni === 366
      {
        return sviatkyList
      }
}