// v-on:click === @click
<template>
    <div class="horseBox">
      <div class="horse" v-for="horse of horseItems" v-bind:key="horse.key">
          <img id="horseImg" :src="require(`@/assets/horses/${horse.imgSrc}`)"
          alt="horse"
          height="190"
          width="230"
          @click="$emit('show-modal', horse.key, horse.imgSrc)">
      </div>
    </div>
</template>

<script>
export default {
  name: 'HorseSelection',
  data () {
    return {
      horseItems: [
        {key: 1, imgSrc: '1_Saltbae.jpg'},
        {key: 2, imgSrc: '2_Vision-of-Justice.jpg'},
        {key: 3, imgSrc: '3_Criminal-Mischief.jpg'},
        {key: 4, imgSrc: '4_Clays-Dialing-In.jpg'},
        {key: 5, imgSrc: '5_Miss-Brooklyn-Bralwer.jpg'},
        {key: 6, imgSrc: '6_Mia-Mischief-1.jpg'},
        {key: 7, imgSrc: '7_TurboShaft.jpg'},
        {key: 8, imgSrc: '8_Buy-Sell-Hold.png'}
      ]
    }
  }
}
</script>

<style scoped>
.horseBox {
    display: inline-grid;
    /* background: white; */
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: auto;
    margin-top: 30px;
    grid-gap: 35px;
    justify-items: center;
    align-items: center;
}

#horseImg {
  box-shadow: 20px 20px 40px 17px rgba(0, 0, 0, .33);

}

#horseImg:hover {
  cursor: pointer;
}

</style>
