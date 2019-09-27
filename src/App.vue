<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    top: 0; left: 0;
    width: 100%; height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(226, 101, 185, 0.8), rgba(226, 101, 185, 0) 70.71%);
    position: fixed;
  }

  #app:before {
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: linear-gradient(rgb(200, 245, 116), rgb(240, 145, 116));
    content: '';
    display: block;
    position: absolute;
    opacity: 0;
    z-index: -100;
    transition: opacity 2.75s;
    animation: bgColorChange infinite;
    animation-duration: 2s;
    animation-direction: alternate;
  }

  @keyframes bgColorChange {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
