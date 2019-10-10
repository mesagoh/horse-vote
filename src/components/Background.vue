<template>
    <div class="bgImgs">
        <img :src="require(`@/assets/carnation.png`)" alt="carnation" height="360" width="380" class="top-left">
        <img :src="require(`@/assets/rose.png`)" alt="rose" class="bottom-right"> <!---height="350" width="440"> --->
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
        opacity: 0.6;
        z-index: -1;
    }
    .bottom-right {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 5px 5px;
        width: 37vw;
        height: auto;
    }
    .top-left {
        position: absolute;
        top:0;
        left: 0;
        margin: 5px 5px;
         width: 30vw;
        height: auto;
    }

</style>
