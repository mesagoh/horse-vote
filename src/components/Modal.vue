<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <div class="thankyou">
                <b>{{messageTitle}}</b>
              </div>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">

              <div class = "completed-message">
                <b>{{messageSubtitle}}</b>

              </div>
              <div class = "credits">
                <div class="credit-title">
                  <br>
                  <hr class="line"/>
                  <p>⬇️&nbsp;&nbsp;&nbsp;&nbsp;<i>Meet the Application Developers!</i>&nbsp;&nbsp;&nbsp;&nbsp;⬇️</p>
                </div>
                <div class = "john_name">
                  John Paulus Francia
                </div>
                <div class="john_major">
                  UC Davis'20
                  <br>
                  Computer Science and Physics Double Major
                </div>
                <div class = "melissa_name">
                  Melissa Goh
                </div>
                <div class="melissa_major">
                  UC Davis'20
                  <br>
                  Computer Science Major
                </div>
              </div>
              <br><br><br>
              <img id="ucdlogo" src="../assets/ucdavis_logo.png"
                  alt="logo"
                  height="27"
                  width="140">
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
            ❌
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
      this.messageTitle = 'Thank You 🥳 '
      this.messageSubtitle = 'We have recorded your response!'
      this.voted = true
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Petit+Formal+Script&display=swap');

.thankyou {
  padding-top: 10px;
 font-family: 'Petit Formal Script', cursive;
 font-size: 50px;
 font-weight: 700;
}

hr.line {
  border: 2px solid rgba(139, 0, 0, 0.575);
  border-top: none;
}
.credits{
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto auto auto auto;
  text-align: center;
  font-size: 18px;
  font-family: 'Assistant', sans-serif;
  font-weight: 700;
}
.credit-title{
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: 20px;
 }
.john_name {
  font-size: 25px;
  color: #e7d56d;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
}
.john_major {
  grid-row-start: 4;
  grid-row-end: 5;
  grid-column-start: 2;
  grid-column-end: 3;
}
.melissa_name {
  font-size: 25px;
  color: #e7d56d;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start:1;
  grid-column-end: 2;
}
.melissa_major{
  grid-row-start: 4;
  grid-row-end: 5;
  grid-column-start:1;
  grid-column-end: 2;
}
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
  width: 560px;
  margin: auto;
  margin-top: 10vh;
  padding: 20px 30px;
  background-color: rgb(243, 96, 77);
  border-radius: 20px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.513);
  transition: all .3s ease;
}

.modal-header {
  margin-top: 0;
  font-size: 30px;
  color: #e7d77e;
}

.modal-body {
  font-size: 18px;
  margin: 20px 10px;
  text-align: left;
}
.modal-body img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.modal-button {
  margin-top: 40px;
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
  background: #60e4a9;
  animation: shadow-pulse 0.7s infinite;
  animation-direction: alternate;
}

.modal-ok-button {
  background: #ec6fac;
  animation: shadow-pulse 0.7s infinite;
  animation-direction: alternate;
}

.modal-cancel-button {
  float: right;
  background: #ec6fac;
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
.completed-message {
  color:rgb(85, 79, 79);
  text-align: center;
}

#ucdlogo {
  opacity: 0.7;
}
</style>
