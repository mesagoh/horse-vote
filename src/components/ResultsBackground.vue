<template>
  <div class="bgImgs">
    <img id="left" :src="require(`@/assets/horse-flowers.png`)" alt="horse-flower" height="650" >
    <img id="top" :src="require(`@/assets/blackEyedSusan.png`)" alt="sunflower">
    <img id="mid" :src="require(`@/assets/carnation.png`)" alt="carnation">
    <img id="bottom" :src="require(`@/assets/rose.png`)" alt="rose">
  </div>
</template>

<script>
export default {
  name: 'Background'
}
</script>

<style scoped>
  .bgImgs {
    top:0; left:0;
    width: 100%; height: 100%;
    position: fixed;
    z-index: -1;
  }
  img#top {
    position: absolute;
    opacity: 0.4;
    height: 45vh;
    width: auto;
    top: -5%; right: -5%;
  }

  img#mid {
    position: absolute;
    opacity: 0.5;
    height: 45vh;
    width: auto;
    top:30vh; right:-5%;
    z-index: 1;
  }

  img#bottom {
    position: absolute;
    opacity: 0.4;
    height: 50vh;
    width: auto;
    bottom:-7%; right:-5%;
  }

  #left {
    position: absolute;
    top: 5%;
    left: -40vw;
    opacity: 0.2;
    height: 100vh;
    width: auto;
  }
</style>
