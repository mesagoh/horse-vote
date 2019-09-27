<template>
  <div id="home">
    <BurgerMenu v-on:toggle-side-nav="toggleNavBar"/>
    <SideNav v-if="showSideNav" v-on:toggle-side-nav="toggleNavBar"/>
    <Header />
    <HorseSelection v-on:show-modal="showModal"/>
    <Modal v-if="isSelected" v-on:close-modal="closeModal" v-on:select-horse="handleSelection">
      <div v-if="!voted" slot="header"><b>You selected Horse #{{selectedHorse}}</b></div>
      <div v-if="!voted" slot="body">
        <img :src="require(`@/assets/${horseImg}`)" alt="Unicorn" height="350" width="350">
      </div>
    </Modal>
  </div>
</template>

<script>
import Header from './Header'
import HorseSelection from './HorseSelection'
import Modal from './Modal'
import BurgerMenu from './BurgerMenu'
import SideNav from './SideNav'
import {dbHorseCollection, increment} from '../store'

export default {
  name: 'Home',
  data () {
    return {
      isSelected: false,
      selectedHorse: null,
      horseImg: '',
      voted: false,
      showSideNav: false
    }
  },
  components: {
    Header,
    HorseSelection,
    Modal,
    BurgerMenu,
    SideNav
  },
  methods: {
    start () {
      this.$confetti.start({
        particles: [
          {
            type: 'rect',
            size: 5
          },
          {
            type: 'circle',
            size: 5
          }
        ],
        defaultColors: [
          'red',
          'pink',
          'Gold'
        ]
      })
    },
    stop () {
      this.$confetti.stop({})
    },
    showModal (id, imgSrc) {
      this.isSelected = true
      this.selectedHorse = id
      this.horseImg = imgSrc
      this.voted = false
    },
    closeModal () {
      this.isSelected = false
      this.selectedHorse = null
      this.stop()
    },
    handleSelection () {
      this.voted = true
      this.start()
      // Record response and send to Firebase!
      let horseRef = dbHorseCollection.doc(this.selectedHorse.toString())
      increment(horseRef)
    },
    toggleNavBar () {
      this.showSideNav = !this.showSideNav
    }
  }
}
</script>

<style scoped>
  /* Homepage Styles */
</style>
