// v-on:click === @click
<template>
    <div class="horseBox">
      <div class="horse" v-for="horse of horseItems" v-bind:key="horse.key">
          <img id="horseImg" :src="require(`@/assets/horses/${horse.imgSrc}`)"
          alt="horse"
          height="190"
          width="230"
          @click="$emit('show-modal', horse.key, horse.name, horse.imgSrc, horse.description, horse.silks)">
          <div class="nameBanner">
            <div class="number">
              {{horse.key}}
              </div>
            {{horse.name}}
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HorseSelection',
  data () {
    return {
      horseItems: [
        {key: 1,
          imgSrc: '1_Saltbae.jpg',
          name: 'Putah Ring on It',
          silks: 'Red',
          description:
            'If you like it then you better commit to this hometown favorite, a thoroughbred raised along the 5.5\n' +
            'miles of Putah Creek running through campus.'},
        {key: 2,
          imgSrc: '2_Vision-of-Justice.jpg',
          name: 'Mrak in the Saddle',
          silks: 'White',
          description:
            'Who’s as fast as Emil Mrak, chancellor, food scientist, and namesake of campus’ central hall? We’ll ' +
            'see if anyone can catch our original pack leader tonight.'},
        {key: 3,
          imgSrc: '3_Criminal-Mischief.jpg',
          name: 'Arboretum-n-Weep',
          silks: 'Blue',
          description:
            'If you need a place for a good cry after your horse loses to this lightning-fast bay filly, we ' +
            'recommend the Carolee Shields White Flower Garden and Gazebo in our 100-acre Arboretum.'},
        {key: 4,
          imgSrc: '4_Clays-Dialing-In.jpg',
          name: 'Karma Patrol',
          silks: 'Yellow',
          description:
            'Named for the squad that has kept the peace and love at the Whole Earth Festival since 1969, this ' +
            'filly packs 50 years of good karma into her race results.'},
        {key: 5,
          imgSrc: '5_Miss-Brooklyn-Bralwer.jpg',
          name: 'Kemper Temper',
          silks: 'Green',
          description:
            'Engineering and computer science students furiously innovate during hands-on study throughout the\n' +
            'rooms of Kemper Hall, just like this bay filly’s mad skills propel her to the lead in many a race.'},
        {key: 6,
          imgSrc: '6_Mia-Mischief-1.jpg',
          name: 'Freshman Stripe',
          silks: 'Black',
          description:
            'This bay filly can outrun our first-year bicyclists and their telltale rainy-day stripes up the ' +
            'back – even when they’re late to class!'},
        {key: 7,
          imgSrc: '7_TurboShaft.jpg',
          name: 'Healthy as a Horse',
          silks: 'Orange',
          description:
            'The expertise of our Health and Veterinary campuses combine like super powers, making this gray filly\n' +
            'Healthy as a Horse!'},
        {key: 8,
          imgSrc: '8_Buy-Sell-Hold.png',
          name: 'Double Major',
          silks: 'Pink',
          description:
            'It takes focus and grit to graduate with two majors like 12% of our students – strengths that\n' +
            'keep this gray filly at the head of the pack.'}
      ]
    }
  }
}
</script>

<style scoped>
.horseBox {
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: auto;
    margin-top: 30px;
    grid-gap: 40px;
    justify-items: center;
    align-items: center;
}

.horse {
  width: 230px;
  height: 190px;
  position: relative;
}

.nameBanner {
  background-color:rgb(241, 230, 214);
  bottom:0; left:0;
  width:100%; height:auto;
  position: absolute;
  top: 180px;
  bottom: -23px;
  text-align: center;
  padding-top: 3px;
  padding-bottom: 3px;
  font-weight: bold;
  font-size: 18px;
}

.number {
  float: left;
  margin-left: 20px;
  background:#004aa8;
  border-radius: 100%;
  width: 12%;
  font-size: 20px;
  color: #d9b000;
}

#horseImg {
  box-shadow: 20px 20px 40px 17px rgba(0, 0, 0, .33);
}

#horseImg:hover {
  cursor: pointer;
}

</style>
