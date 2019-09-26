<template>
  <div id="home">
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
import {dbHorseCollection, increment} from '../store'
export default {
  name: 'home',
  data () {
    return {
      isSelected: false,
      selectedHorse: null,
      horseImg: '',
      voted: false
    }
  },
  components: {
    Header,
    HorseSelection,
    Modal
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
    }
  }
}
</script>

<style>
  /* Global Styles */

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
