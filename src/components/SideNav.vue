<template>
    <div class="navbar-mask" v-on:click="closeNavBar">
    <transition name="slide">
        <div class="navbar" v-if="navShowing">
            <p>hello</p>
        </div>
    </transition>
    </div>
</template>

<script>
export default {
  name: 'SideNav',
  data () {
    return {
      navShowing: true
    }
  },
  methods: {
    closeNavBar () {
      this.$emit('toggle-side-nav')
      this.navShowing = false
    }
  }
}
</script>

<style>
.navbar {
    height: 100%;
    background: rgb(212, 191, 0);
    position: fixed;
    opacity: 1;
    /* z-index: 999; */
    padding: 3rem 20px 2rem 20px;
    width: 300px;
}

.navbar-mask {
    background-color: rgba(19, 15, 64, .4);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}

.slide-leave-active {
  transition: all 0.2s ease;
}

.slide-enter-active {
  transition: all 0.2s ease;
}

</style>
