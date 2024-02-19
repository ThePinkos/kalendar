function d(date) {
  var start = new Date(date.getFullYear(), 0, 0)
  var diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000
  var oneDay = 1000 * 60 * 60 * 24
  var dayNumber = Math.floor(diff / oneDay)

  return dayNumber - 1
}

export function sviatky(pocetDni, year) {
  const sviatkyList = Array(pocetDni).fill(undefined)

  const sviatkyData = [
    { M: 1, D: 1, name: 'Deň vzniku Slovenkej republiky' },
    { M: 1, D: 6, name: 'Zjavenie Pána (Traja králi)' },
    { M: 5, D: 1, name: 'Sviatok práce' },
    { M: 5, D: 8, name: 'Deň víťazstva nad fašizmom' },
    { M: 7, D: 5, name: 'Sviatok svätých Cyrila a Metoda' },
    { M: 8, D: 29, name: 'Výročie SNP' },
    { M: 9, D: 1, name: 'Deň Ústavy Slovenskej republiky' },
    { M: 9, D: 15, name: 'Sedembolestná Panna Mária' },
    { M: 11, D: 1, name: 'Sviatok všetkých svätých' },
    { M: 11, D: 17, name: 'Deň boja za slobodu a demokraciu' },
    { M: 12, D: 24, name: 'Štedrý deň' },
    { M: 12, D: 25, name: 'Prvý sviatok vianočný' },
    { M: 12, D: 26, name: 'Druhý sviatok vianočný' }
  ]

  sviatkyData.forEach(({ M, D, name }) => {
    const date = new Date(year, M - 1, D)
    sviatkyList[d(date)] = name
  })

  return sviatkyList
}

export function mena(pocetDni, year) {
  const menaList = Array(pocetDni).fill(undefined)

  const menaData = [
    //Narodeniny
    { M: 1, D: 6, name: 'Helena Zavadzanová - narodeniny (1949)' },
    { M: 1, D: 2, name: 'Gyula Hajdú ml. - narodeniny (1970)' },
    { M: 1, D: 26, name: 'Ildikó Kubíková - narodeniny (1975)' },
    { M: 2, D: 8, name: 'Anton Kubík ml. - narodeniny (1979)' },
    { M: 2, D: 12, name: 'Gyula Hajdú st. - narodeniny (1942)' },
    { M: 2, D: 17, name: 'Anton Kubík st. - narodeniny (1951)' },
    { M: 2, D: 26, name: 'Matej Kubík st. - narodeniny (1926)' },
    { M: 3, D: 10, name: 'Peter Riecky - narodeniny (1957)' },
    { M: 3, D: 27, name: 'Viola Hajdúová - narodeniny (1947)' },
    { M: 4, D: 4, name: 'Ľubica Imríšková - narodeniny (1963)' },
    { M: 4, D: 18, name: 'Evka Kubíková - narodeniny (2017)' },
    { M: 4, D: 29, name: 'Márk a Maté Hajdú - narodeniny (2005)' },
    { M: 6, D: 23, name: 'Branislav Kubík - narodeniny (1975)' },
    { M: 6, D: 24, name: 'Janka Kubíková - narodeniny (1951)' },
    { M: 7, D: 8, name: 'Helena Riecka - narodeniny (1927)' },
    { M: 7, D: 13, name: 'Matej Kubík ml. - narodeniny (2012)' },
    { M: 7, D: 17, name: 'Rudolf Zavadzan st. - narodeniny (1947)' },
    { M: 8, D: 12, name: 'Štefan riecky st. - narodeniny (1926)' },
    { M: 8, D: 23, name: 'Zuzana Kubíková - narodeniny (1979)' },
    { M: 8, D: 26, name: 'Edita Hajdúová - narodeniny (1969)' },
    { M: 8, D: 28, name: 'Henrietta Hajdúová - narodeniny (1997)' },
    { M: 9, D: 6, name: 'Viktória Kubíková - narodeniny (2012)' },
    { M: 9, D: 8, name: 'Erzsébet Földesová - narodeniny (1982)' },
    { M: 9, D: 14, name: 'Hanka Kubíková - narodeniny (2014)' },
    { M: 9, D: 19, name: 'Vladimír Imríšek - narodeniny (1960)' },
    { M: 10, D: 21, name: 'Paulína Kubíková - narodeniny (1926)' },
    { M: 11, D: 4, name: 'András a Dániel Földesovci - narodeniny (2008)' },
    { M: 11, D: 10, name: 'Adam Kubík - narodeniny (2003)' },
    {
      M: 11,
      D: 24,
      name: 'Tomáš Kubík - narodeniny (2007) a Zuzana Michalidesová Kubíková - narodeniny (1978)'
    },

    // Meniny
    { M: 2, D: 9, name: 'Zdenko Kubík - meniny' },
    { M: 2, D: 24, name: 'Matej Kubík - meniny' },
    { M: 3, D: 7, name: 'Tomáš Kubík - meniny' },
    { M: 3, D: 10, name: 'Branislav Kubík a Ildikó Kubíková - meniny' },
    { M: 3, D: 16, name: 'Henrietta Hajdúová - meniny' },
    { M: 3, D: 17, name: 'Ľubica Imríšková - meniny' },
    { M: 4, D: 12, name: 'Gyula Hajdú st. a Gyula Hajdú ml. - meniny' },
    { M: 4, D: 25, name: 'Márk Hajdú - meniny' },
    { M: 5, D: 10, name: 'Viktória Kubíková - meniny' },
    { M: 6, D: 13, name: 'Anton Kubík ml. a Anton Kubík st. - meniny' },
    { M: 7, D: 21, name: 'Dániel Földes - meniny' },
    { M: 7, D: 24, name: 'Vladimír Imríšek - meniny' },
    { M: 7, D: 26, name: 'Hanka Kubíková - meniny' },
    { M: 8, D: 11, name: 'Zuzana Kubíková a Zuzana Michalidesová Kubíková - meniny' },
    { M: 8, D: 18, name: 'Helena Zavadzanová - meniny' },
    { M: 8, D: 21, name: 'Janka Kubíková - meniny' },
    { M: 9, D: 16, name: 'Edit Hajdúová - meniny' },
    { M: 9, D: 21, name: 'Máté Hajdú - meniny' },
    { M: 11, D: 19, name: 'Erzsebét Földesová - meniny' },
    { M: 11, D: 30, name: 'András Földes - meniny' },
    { M: 12, D: 19, name: 'Viola Hajdúová - meniny' },
    { M: 12, D: 24, name: 'Adam Kubík a Eva Kubíková - meniny' }
  ]

  menaData.forEach(({ M, D, name }) => {
    const date = new Date(year, M - 1, D)
    menaList[d(date)] = name
  })

  return menaList
}

export function vyrocia(pocetDni, year) {
  const vyrociaList = Array(pocetDni).fill(undefined)

  const vyrociaData = [
    { M: 1, D: 1, name: 'Deň vzniku Slovenkej republiky' },
    { M: 1, D: 6, name: 'Zjavenie Pána (Traja králi)' },
    { M: 5, D: 1, name: 'Sviatok práce' },
    { M: 5, D: 8, name: 'Deň víťazstva nad fašizmom' },
    { M: 7, D: 5, name: 'Sviatok svätých Cyrila a Metoda' },
    { M: 8, D: 29, name: 'Výročie SNP' },
    { M: 9, D: 1, name: 'Deň Ústavy Slovenskej republiky' },
    { M: 9, D: 15, name: 'Sedembolestná Panna Mária' },
    { M: 11, D: 1, name: 'Sviatok všetkých svätých' },
    { M: 11, D: 17, name: 'Deň boja za slobodu a demokraciu' },
    { M: 12, D: 24, name: 'Štedrý deň' },
    { M: 12, D: 25, name: 'Prvý sviatok vianočný' },
    { M: 12, D: 26, name: 'Druhý sviatok vianočný' }
  ]

  vyrociaData.forEach(({ M, D, name }) => {
    const date = new Date(year, M - 1, D)
    vyrociaList[d(date)] = name
  })

  return vyrociaList
}
