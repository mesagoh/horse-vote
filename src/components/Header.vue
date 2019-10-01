<template>
    <div class="header">
        <img id="logo" :src="require(`@/assets/LGS_logo_RGB.png`)" alt="logo" height="170" width="430">
        <!-- <h1> {{title}} </h1> -->
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'Pick your winner'
    }
  }
}
</script>

<style scoped>
/* Title Styling */
h1 {
    color:black;
}

#logo {
  margin-top: 30px;
}

</style>
