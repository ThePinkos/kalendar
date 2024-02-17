<template>
  <div id="mainfull">
  <div class="main">
    <div class="strana uvodna">Rok {{ generate[6].at(10) }}</div>
    <div class="strana " v-for="strana in 55" :key="strana">
      <!-- FOTKA -->
      <div class="fotka"></div>

      <!-- TYZDEN -->
      <div class="tyzden">
        <div class="tyzden_info">
          <div>{{ generate[6].at(strana - 1) }} {{ generate[4].at(strana - 1) }}</div>
          <div>{{ generate[3].at((strana - 1) * 7) }}. týždeň</div>
        </div>

        <div class="den" v-for="den in 5" :key="den">
          <div class="datum">{{ generate[0].at(den - 7 + strana * 7 - 1) }}</div>
          <div class="info">
            <div class="menoDna">{{ generate[1].at(den - 7 + strana * 7 - 1) }}</div>
            <div class="dianie">
              <p class="narodeniny">Tomáš Kubík - narodeniny (2024)</p>
              <p class="sviatky">Tomáš Kubík - narodeniny (2024)</p>
              <p class="slnovraty">Slnovrat</p>
            </div>
            <div class="meniny">{{ generate[5].at(den - 7 + strana * 7 - 1) }}</div>
            <div class="denVRoku">{{ generate[2].at(den - 7 + strana * 7 - 1) }}</div>
          </div>
        </div>
        <div class="den vikend" v-for="den in 2" :key="den">
          <div class="datum">{{ generate[0].at(5 + (den - 7 + strana * 7 - 1)) }}</div>
          <div class="info">
            <div class="menoDna">{{ generate[1].at(5 + (den - 7 + strana * 7 - 1)) }}</div>
            <div class="dianie">Test</div>
            <div class="meniny">{{ generate[5].at(5 + (den - 7 + strana * 7 - 1)) }}</div>
           <div class="denVRoku">{{ generate[2].at(5 + (den - 7 + strana * 7 - 1)) }}</div>
          </div>
        </div>
      </div>

      <!-- POZNAMKY -->
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
  padding-right: 1cm;
}

.main > div:nth-child(n + 29) {
  grid-column: 2;
  padding-left: 1cm;
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

  height: 100cqmax;
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
  height: 3cm;

  display: grid;
  grid-template-columns: 12% calc(88%);
}
.datum {
  background-color: #0070c0;
  border-top: 1mm solid white;

  height: 3cm;
  font-size: 1cm;

  font-family: system-ui;
  font-weight:bold;
  color: white;

  line-height: 2.8cm;
  text-align: center;
}
.vikend .datum {
  background-color: #00b050;
}
.info {
  border-top: 1mm solid rgb(38, 74, 194);
  border-right: 1mm solid rgb(38, 74, 194);
  border-collapse: collapse;

  height: 3cm;
  font-size: 65%;
  line-height: 4mm;

  display: grid;
  grid-template-columns: 2.7fr 10fr 1fr ;
  grid-template-rows: 1fr 5fr 7fr;

}
.menoDna {
  color: rgb(49, 49, 49);
  padding-top: 0.4mm;
  padding-left: 0.55mm;
  font-size: 3mm;
  font-weight: 700;
}
.meniny {
  padding-left: 1mm;
  font-size: 2.8mm;
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
.dianie {
  grid-row: 1/4;
}
.dianie p {
  padding: 0.8mm 1.5mm;
  border-radius: 1mm;
  width: max-content;
  max-width: 7.3cm;
  margin-top: 0.5mm;
}
.dianie .sviatky {
  background-color: rgb(173, 11, 11);
}
.dianie .narodeniny {
  background-color: yellow;
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

</style>
