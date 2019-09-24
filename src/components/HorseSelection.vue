// v-on:click === @click
<template>
    <div class="horseBox">
      <div class="horse" v-for="horse of horseItems" v-bind:key="horse.key">
          <img :src="require(`@/assets/${horse.imgSrc}`)"
          alt="Unicorn"
          height="250"
          width="250"
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
        {key: 1, imgSrc: 'unicorn.png'},
        {key: 2, imgSrc: 'unicorn.png'},
        {key: 3, imgSrc: 'unicorn.png'},
        {key: 4, imgSrc: 'unicorn.png'},
        {key: 5, imgSrc: 'unicorn.png'},
        {key: 6, imgSrc: 'unicorn.png'},
        {key: 7, imgSrc: 'unicorn.png'},
        {key: 8, imgSrc: 'unicorn.png'}
      ]
    }
  }
}
</script>

<style scoped>
.horseBox {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 0 auto;
    width: 90%;
    row-gap: 30px;
    column-gap: auto;
}

img {
  box-shadow: 20px 20px 40px 17px rgba(0, 0, 0, .33);
  background: transparent;
  transition: all 0.35s ease-in-out;
}

img:hover {
  cursor: pointer;
  width: 260px;
  height: 260px;
}

</style>
