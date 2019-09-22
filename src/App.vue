<template>
  <div id="app">
    <Header />
    <HorseSelection v-on:show-modal="showModal"/>
    <Modal v-if="isSelected" v-on:close-modal="closeModal" v-on:select-horse="handleSelection">
      // Here we put code that varies according to which Horse was picked
      //    ie, the img src of the horse
      <h3 slot="header">You selected Horse #{{selectedHorse}}</h3>
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
      console.log('closing modal!')
      this.isSelected = false
      this.selectedHorse = null
    },
    handleSelection () {
      // Record response and send to Firebase!
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
