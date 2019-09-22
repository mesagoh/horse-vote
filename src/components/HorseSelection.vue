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
  },
  methods: {
    showModal () {
      console.log('clicked!')
    }
  }
}
</script>

<style scoped>
.horseBox {
    display: flex;
    flex-direction: row;
    width: 100%;
    background: grey;
    justify-content: space-evenly;
}

.horse:hover{
    cursor: pointer;
}
img {

    background: white;
}

</style>
