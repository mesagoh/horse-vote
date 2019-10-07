<template>
    <transition name="fade">
        <div class="resultsConfirm" v-if="!closed">
            <button id="reveal" v-on:click="closeModal">Show Results</button>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'ResultsOverlay',
  data () {
    return {
      closed: false
    }
  },
  methods: {
    closeModal () {
      this.closed = true
    }
  }
}
</script>

<style scoped>

button#reveal {
  width: 200px;
  height: 100px;
  padding: 20px;
  font-size: 27px;
  border-radius: 10px;
  font-weight: bold;
  animation: shadow-pulse 0.6s infinite;
  animation-direction: alternate;
  background-color: rgb(243, 209, 155);
  color: rgb(243, 102, 77);
  border: none;
  position: absolute;
  top: 50%;
  left: 50%;

  margin: -70px 0 0 -90px;
}

button#reveal:focus {
  outline: none;
}

button#reveal:hover {
    cursor: pointer;
}

.resultsConfirm {
    position: absolute;
    top:0; left:0;
    width: 100%; height: 100%;
    background:rgb(243, 96, 77);
    z-index: 999;
}

.fade-leave {
    opacity: 1;
}

.fade-leave-to {
    opacity: 0;
}

.fade-leave-active{
    transition: all 0.8s;
}

@keyframes shadow-pulse
{
    0% {
      transform: scale(1.0)
    }

    100% {
      transform: scale(1.1)
    }
}

</style>
