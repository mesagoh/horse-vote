<template>
  <div id="app">
    <Header />
    <HorseSelection />
  </div>
</template>

<script>
import Header from './components/Header'
import HorseSelection from './components/HorseSelection'

export default {
  name: 'App',
  components: {
    Header,
    HorseSelection
  }
}
</script>

<style>
/* Global Styles */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
