<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <b>{{messageTitle}}</b>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              {{messageSubtitle}}
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button v-if="!voted" class="modal-button modal-confirm-button" v-on:click="showMessage">
                👍
              </button>
              <button v-if="!voted" class="modal-button modal-cancel-button" v-on:click="$emit('close-modal')">
                ❌
              </button>
            </slot>
          </div>
        </div>
        <button v-if="voted" class="modal-button modal-ok-button" v-on:click="$emit('close-modal')">
            👌
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      messageTitle: '',
      messageSubtitle: '',
      voted: false
    }
  },
  methods: {
    showMessage () {
      this.$emit('select-horse')
      this.messageTitle = 'Thank you for voting 🥳 '
      this.messageSubtitle = 'We have recorded your response!'
      this.voted = true
    }
  }
}
</script>

<style>
/* Global so that can be used in App.vue for customized contents */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(68, 64, 64, 0.685);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  justify-content: center;
}

.modal-container {
  display: block;
  width: 500px;
  margin: auto;
  margin-top: 10vh;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.513);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  margin-top: 0;
  font-size: 30px;
  color: #eb8039;
}

.modal-body {
  margin: 20px 0;
}

.modal-button {
  margin-top: 30px;
  font-size: 30px;
  border-radius: 100%;
  box-shadow: 0px 0px 20px -1px rgba(0,0,0,0.90);
  border: none;
  outline: none;
  width: 100px;
  height: 100px;
  align-self: center;
}

.modal-button:hover {
  cursor: pointer;

}

.modal-confirm-button {
  float:left;
  background: #bdebd6;
  animation: shadow-pulse 0.7s infinite;
  animation-direction: alternate;
}

.modal-ok-button {
  background: rgb(154, 225, 235);
  animation: shadow-pulse 0.7s infinite;
  animation-direction: alternate;
}

.modal-cancel-button {
  float: right;
  background: #ebbdd3;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
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
