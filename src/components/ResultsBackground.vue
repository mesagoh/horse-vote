<template>
  <div class="bgImgs">
    <div class="left">
      <img :src="require(`@/assets/horse-flowers.png`)" alt="horse-flower" height="650" >
    </div>
    <div class="rightPics">
      <img id="top" :src="require(`@/assets/blackEyedSusan.png`)" alt="sunflower" height="320" width="350">
      <img id="mid" :src="require(`@/assets/carnation.png`)" alt="carnation" height="330" width="350">
      <img id="bottom" :src="require(`@/assets/rose.png`)" alt="rose" height="360" width="440">
    </div>
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

  .rightPics {
    height: 100%;
    opacity: 0.7;
  }

  img#top {
    position: absolute;
    top: -5%; right: -5%;
  }

  img#mid {
    position: absolute;
    top:210px; right:-5%;
    z-index: 1;
  }

  img#bottom {
    position: absolute;
    bottom:-7%; right:-5%;
  }

  .left {
    position: absolute;
    top: 5%;
    left: -37%;
    opacity: 0.5;
  }
</style>
