<template>
  <div>
    <div class="strana" v-for="strana in 55" :key="strana">
      <!-- FOTKA -->
      <div class="fotka"></div>

      <!-- TYZDEN -->
      <div class="tyzden">
        <div class="tyzden_info">
          <div>{{ generate[5].at((strana - 1) * 7) }} {{ generate[4].at((strana - 1) * 7) }}</div>
          <div>{{ generate[3].at((strana - 1) * 7) }}. týždeň</div>
        </div>

        <div class="den" v-for="den in 5" :key="den">
          <div class="datum">{{ generate[0].at(den - 7 + strana * 7 - 1) }}</div>
          <div class="info">
            {{ generate[1].at(den - 7 + strana * 7 - 1) }}
            {{ generate[6].at(den - 7 + strana * 7 - 1) }} --
            {{ generate[2].at(den - 7 + strana * 7 - 1) }}
          </div>
        </div>
        <div class="den vikend" v-for="den in 2" :key="den">
          <div class="datum">{{ generate[0].at(5 + (den - 7 + strana * 7 - 1)) }}</div>
          <div class="info">
            {{ generate[1].at(5 + (den - 7 + strana * 7 - 1)) }}
            {{ generate[6].at(5 + (den - 7 + strana * 7 - 1)) }} --
            {{ generate[2].at(5 + (den - 7 + strana * 7 - 1)) }}
          </div>
        </div>
      </div>

      <!-- POZNAMKY -->
      <div class="poznamky"><img src="../assets/pero.svg" alt="" /></div>
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
.strana {
  width: 13cm;
  height: 40cm;
  padding: 1cm;
  outline: 1mm solid black;
  background-color: white;

  page-break-after: always;
}

/* CAST MESIAC INFO */
.tyzden_info {
  font-size: 0.5cm;
  color: white;

  font-family: system-ui;
  font-weight: bold;
  letter-spacing: 0.3mm;

  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 3.5cm;

  margin-bottom: 2mm;

  text-align: center;
}
.tyzden_info div {
  background-color: rgb(5, 22, 80);
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
  grid-template-columns: 10% calc(90%);
}

.datum {
  background-color: #0070c0;
  border-top: 1mm solid white;

  font-size: 1cm;

  font-family: system-ui;
  font-weight: bold;
  color: white;

  height: 3cm;

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

  max-width: 13cm;

  aspect-ratio: 4/3;
  object-fit: cover;
}

/* CAST POZNAMKY */
.poznamky img {
  width: 8mm;
  margin: 1.5mm;
  opacity: 0.5;
}
</style>
