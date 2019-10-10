<template>
    <div class="header">
        <img id="logo" :src="require(`@/assets/LGS_logo_RGB.png`)" alt="logo" height="170" width="430">
        <h1> {{title}} </h1>
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
/* @import url('https://fonts.googleapis.com/css?family=Petit+Formal+Script&display=swap'); */
h1 {
    /* display: block;
    margin: 0 auto; */
    color:#d9b000;
    background: #0049a8c0;
    /* width: 40vw; */
    /* font-family: 'Petit Formal Script', cursive; */
    margin-top: 7px;
    margin-bottom: 0px;
    font-size: 40px;
}

#logo {
  margin-top: 30px;
}

</style>
