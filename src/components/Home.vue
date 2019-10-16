<template>
  <div id="home">
    <Background />
    <Header />
    <HorseSelection v-on:show-modal="showModal"/>
    <Modal v-if="isSelected" v-on:close-modal="closeModal" v-on:select-horse="handleSelection">
      <div v-if="!voted" slot="header"><b><span class="number">{{selectedNum}}</span> {{selectedHorse}}</b></div>
      <div v-if="!voted" slot="body">
        <img :src="require(`@/assets/horses/${horseImg}`)" alt="Unicorn" height="300" >

        <div v-if="!voted" slot="body"><b><br>{{selectedHorseDescriprion}}</b></div>
        <div v-if="!voted" slot="body"><b><br>Silks: {{silks}}</b></div>

      </div>

    </Modal>
  </div>
</template>

<script>
import Header from './Header'
import HorseSelection from './HorseSelection'
import Modal from './Modal'
import Background from './Background'
import {dbHorseCollection, increment} from '../store'

export default {
  name: 'Home',
  data () {
    return {
      isSelected: false,
      selectedNum: 0,
      selectedHorse: null,
      horseImg: '',
      voted: false
    }
  },
  components: {
    Header,
    HorseSelection,
    Modal,
    Background
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
    showModal (num, id, imgSrc, description, silks) {
      this.isSelected = true
      this.selectedNum = num
      this.selectedHorse = id
      this.selectedHorseDescriprion = description
      this.horseImg = imgSrc
      this.voted = false
      this.silks = silks
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
    }
  }
}
</script>

<style scoped>
  /* Homepage Styles */

  .number {
    display: inline-block;
    background:#004aa8;
    border-radius: 100%;
    width: 7%;
    font-size: 30px;
  }
  .horseName {
    color: #d9b000;
  }
</style>
