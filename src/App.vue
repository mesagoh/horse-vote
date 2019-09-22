<template>
  <div id="app">
    <Header />
    <HorseSelection v-on:show-modal="showModal"/>
    <Modal v-if="isSelected" v-on:close-modal="closeModal">
      <h3 slot="header">the horse selected is {{selectedHorse}}</h3>
    </Modal>
  </div>
</template>

<script>
import Header from './components/Header'
import HorseSelection from './components/HorseSelection'
import Modal from './components/Modal'

export default {
  name: 'App',
  data () {
    return {
      isSelected: false,
      selectedHorse: null
    }
  },
  components: {
    Header,
    HorseSelection,
    Modal
  },
  methods: {
    showModal (id) {
      this.isSelected = true
      this.selectedHorse = id
    },
    closeModal () {
      this.isSelected = false
      this.selectedHorse = null
    }
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
