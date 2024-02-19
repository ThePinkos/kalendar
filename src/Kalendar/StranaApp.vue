<template>
  <div id="mainfull">
    <input type="number" id="vyskaDna" v-model="height" />
    <div class="main">
      <div class="strana uvodna">Rok {{ generate[6].at(10) }}</div>

      <div class="strana" v-for="strana in 55" :key="strana">
        <!-- FOTKA -->
        <div class="fotka"></div>

        <!-- TYZDEN -->
        <div class="tyzden">
          <div class="tyzden_info">
            <div>{{ generate[4].at(strana - 1) }} {{ generate[6].at(strana - 1) }}</div>
            <div>{{ generate[3].at((strana - 1) * 7) }}. týždeň</div>
          </div>

          <!-- DEN -->
          <div class="den" :class="{ vikend: den === 6 || den === 7 }" v-for="den in 7" :key="den" :style="{ height: `${height}cm` }">
            <!-- DATUM CAST -->
            <div class="datum" :style="{ borderBottom: den === 7 ? '1mm white solid' : undefined }">
              {{ generate[0].at(den - 7 + strana * 7 - 1) }}
            </div>

            <!-- INFO CAST -->
            <div class="info" :style="{ borderBottom: den === 6 ? '0' : undefined }">
              <div class="menoDna">{{ generate[1].at(den - 7 + strana * 7 - 1) }}</div>

              <!-- SVIATKY, NARODENINY, MENINY, ATD. -->
              <div class="dianie">
                <div class="sviatky">
                  {{ generate[7].at(den - 7 + strana * 7 - 1) }}
                </div>
                <div class="vyrociaSvadby">
                  {{ generate[8].at(den - 7 + strana * 7 - 1) }}
                </div>
                <div class="vyrociaUmrtia">
                  {{ generate[9].at(den - 7 + strana * 7 - 1) }}
                </div>
                <div class="mena">
                  {{ generate[10].at(den - 7 + strana * 7 - 1) }}
                </div>
              </div>

              <!-- MENINY V TEN DEN -->
              <div class="meniny">{{ generate[5].at(den - 7 + strana * 7 - 1) }}</div>

              <!-- CISLO DNA V ROKU -->
              <div class="denVRoku">{{ generate[2].at(den - 7 + strana * 7 - 1) }}</div>
            </div>
          </div>

          <!-- POZNAMKY -->
          <div class="poznamky"><img src="../assets/pero.svg" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { kalendar } from './InfoTyzden.js'

export default {
  computed: {
    generate() {
      return kalendar(this.id)
    }
  },
  data() {
    return {
      height: 3
    }
  },
  props: ['id']
}
</script>

<style scoped>
/* CAST STRANA */

#mainfull {
  display: grid;
  justify-content: center;
}

.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: dense;
}

.main > div:nth-child(-n + 28) {
  grid-column: 1;
}

.main > div:nth-child(n + 29) {
  grid-column: 2;
}

.uvodna {
  font-family: system-ui;
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 400%;
  font-weight: bold;
}

.strana {
  background-color: white;

  font-family: system-ui;

  padding: 20mm 10mm 0 10mm;

  height: 40cm;

  outline: 0.6mm dashed black;
}

/* CAST MESIAC INFO */
.tyzden_info {
  font-size: 0.5cm;
  color: white;

  font-weight: bold;
  letter-spacing: 0.3mm;

  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 3.5cm;

  margin-bottom: 2mm;

  text-align: center;
}
.tyzden_info div {
  background-color: #051650;
  padding: 0.3mm;
}

/* CAST TYZDEN */
.tyzden {
  margin: 0 auto;
  display: grid;
}

.den {
  display: grid;
  grid-template-columns: 12% calc(88%);
}
.datum {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #0070c0;
  border-top: 1mm solid white;

  font-size: 250%;
  font-family: system-ui;
  font-weight: bold;
  color: white;

  text-align: center;
}
.vikend .datum {
  background-color: #00b050;
}
.info {
  border-top: 1mm solid rgb(38, 74, 194);
  border-right: 1mm solid rgb(38, 74, 194);

  font-size: 65%;
  line-height: 4mm;

  overflow: hidden;

  display: grid;
  grid-template-columns: 22% 68% 10%;
  grid-template-rows: 25% 65% 10%;
  max-width: 100%;
}
.menoDna {
  color: rgb(49, 49, 49);
  padding-top: 0.24em;
  padding-left: 0.2em;
  font-size: 172%;
  font-weight: 700;
}
.meniny {
  padding-left: 0.4em;
  font-size: 145%;
  font-weight: 350;
  font-style: italic;

  grid-row: 2;
  grid-column: 1;
}
.denVRoku {
  grid-column: 3;
  text-align: right;
  font-weight: bold;
  color: rgb(49, 49, 49);
  padding-right: 1mm;
}
.dianie > * {
  grid-row: 1/4;

  padding: 0.8mm 1.5mm;
  border-radius: 1mm;
  margin-top: 0.5mm;

  max-width: 7.3cm;
  width: max-content;
  display: block;
  clear: right;
}
.dianie > *:empty {
  display: none;
}

.sviatky {
  background-color: rgb(173, 11, 11);
  color: white;
}
.vyrociaSvadby {
  background-color: #0070c0;
  color: yellow;
}
.vyrociaUmrtia {
  background-color: rgb(49, 49, 49);
  color: white;
}
.mena {
  background-color: yellow;
  color: black;
}

.vikend .info {
  border-bottom: 1mm solid #00b050;
  border-top: 1mm solid #00b050;
  border-right: 1mm solid #00b050;
  background-color: #e2efda;
}

/* CAST FOTKA */
.fotka {
  background-color: rgb(83, 153, 153);

  aspect-ratio: 4/3;
  object-fit: cover;
}

/* CAST POZNAMKY */
.poznamky img {
  width: 8mm;
  margin: 1.5mm;
  opacity: 0.5;
}

@media print {
  .strana {
    height: calc(100cqmax - 2cm);
  }
  input {
    display: none;
  }
}
</style>
