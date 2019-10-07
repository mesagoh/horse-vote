<template>
  <div class="bgImgs">
    <div class="top-left">
      <img :src="require(`@/assets/carnation.png`)" alt="rose" height="330" >
    </div>
    <div class="bottom-right">
      <img :src="require(`@/assets/rose.png`)" alt="rose" height="350" width="440">
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
  .bottom-right {
    position: absolute;
    bottom: 0%;
    right:0%;
    margin: 5px 5px;
  }
  .top-left {
    position: absolute;
    top: 5%;
    left: 2%;
    margin: 5px 5px;
  }
</style>
