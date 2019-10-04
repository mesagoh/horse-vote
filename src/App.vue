<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Assistant&display=swap');

  #app {
    top: 0; left: 0;
    width: 100%; height: 100%;
    font-family: 'Assistant', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: linear-gradient(217deg, rgba(202, 3, 3, 0.8), rgba(145, 49, 49, 0.096) 70.71%),
    linear-gradient(127deg, rgba(236, 95, 189, 0.8), rgba(165, 78, 136, 0.116) 70.71%);
    position: fixed;
  }

  #app:before {
    top: 0; left: 0;
    width: 100%; height: 100%;
    background:  linear-gradient(127deg, rgba(177, 73, 142, 0.8), rgba(194, 98, 162, 0) 70.71%),
    linear-gradient(217deg, rgba(187, 3, 3, 0.8), rgba(180, 201, 64, 0.397) 70.71%);
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

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-enter-active{
    transition: all 0.8s;
  }

</style>
