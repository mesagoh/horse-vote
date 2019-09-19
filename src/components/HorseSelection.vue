<template>
    <div class="horseBox">
        <ul id="horseMenu">
            <li v-bind:key="horse.key" v-for="horse of horseItems" v-on:click="showModal">
                <img :src="require(`@/assets/${horse.imgSrc}`)" alt="Unicorn" height="300" width="300">
            </li>
        </ul>
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
    background: grey;
}

ul#horseMenu li{
    display: inline;
}
img {
    margin: 10px 10px;
    background: white;
}

</style>
