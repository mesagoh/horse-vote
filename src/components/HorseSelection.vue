// v-on:click === @click
<template>
    <div class="horseBox">
      <div class="horse" v-for="horse of horseItems" v-bind:key="horse.key" v-on:click="$emit('show-modal', horse.key)">
          <img :src="require(`@/assets/${horse.imgSrc}`)" alt="Unicorn" height="300" width="300">
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
        {key: 3, imgSrc: 'unicorn.png'}
      ]
    }
  }
}
</script>

<style scoped>
.horseBox {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
}

img {
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  background: white;
  transition: all 0.35s ease-in-out
}

img:hover {
  cursor: pointer;
  width: 315px;
  height: 315px;
}

</style>
