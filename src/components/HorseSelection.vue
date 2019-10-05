// v-on:click === @click
<template>
    <div class="horseBox">
      <div class="horse" v-for="horse of horseItems" v-bind:key="horse.key">
          <img id="horseImg" :src="require(`@/assets/horses/${horse.imgSrc}`)"
          alt="horse"
          height="190"
          width="230"
          @click="$emit('show-modal', horse.name, horse.imgSrc)">

          <div class="nameBanner">
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
        {key: 1, imgSrc: '1_Saltbae.jpg', name: 'Putah Ring on it'},
        {key: 2, imgSrc: '2_Vision-of-Justice.jpg', name: 'Mrak in the Saddle'},
        {key: 3, imgSrc: '3_Criminal-Mischief.jpg', name: 'Arboretum-n-Weep'},
        {key: 4, imgSrc: '4_Clays-Dialing-In.jpg', name: 'Karma Patrol'},
        {key: 5, imgSrc: '5_Miss-Brooklyn-Bralwer.jpg', name: 'Kemper Temper'},
        {key: 6, imgSrc: '6_Mia-Mischief-1.jpg', name: 'Freshman Stripe'},
        {key: 7, imgSrc: '7_TurboShaft.jpg', name: 'Healthy as a Horse'},
        {key: 8, imgSrc: '8_Buy-Sell-Hold.png', name: 'Double Major'}
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
    grid-gap: 35px;
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
  bottom: -15px;
  text-align: center;
  //padding-top: 3px;
  padding-bottom: 3px;
}

#horseImg {
  box-shadow: 20px 20px 40px 17px rgba(0, 0, 0, .33);

}

#horseImg:hover {
  cursor: pointer;
}

</style>
