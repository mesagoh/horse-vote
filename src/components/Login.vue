<template>
  <div id="login">
    <div class='container'>
      <transition name="fade">
        <div key=1 v-if="isLoggedIn" class="header">
          <p id="title"> You are logged in as </p>
          <p id="subtitle">{{this.email}} </p>
        </div>
        <div v-else class="header">
          <p id="title">Admin Log In</p>
        </div>
      </transition>
      <input type="email"  name="email" placeholder="Email" v-model="email"><br>
      <input type="password" name="password" placeholder="Password" v-model="password"><br>
    <button v-if="!isLoggedIn" v-on:click='login'><b>Login</b></button>
    <button v-if="isLoggedIn" v-on:click='logout'><b>Logout</b></button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: '',
      isLoggedIn: false
    }
  },
  methods: {
    login: function (e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.isLoggedIn = true
            alert(`You are logged in as ${this.email}`)
            this.$router.push('home')

            // this.$router.go({ path: this.$router.path })
          },
          err => {
            alert(err.message)
          }
        )
      e.preventDefault()
    },
    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // this.$router.go({ path: this.$router.path })
          this.isLoggedIn = false
          alert(`You are logged out!`)
        })
    }
  },
  beforeMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true
        this.email = user.email
      } else {
        this.isLoggedIn = false
      }
    })
  }
}
</script>

<style scoped>
#login {
  top: 0; left: 0;
  width: 100%; height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(217deg, rgba(2, 133, 68, 0.8), rgba(2, 133, 68,0) 70.71%),
  linear-gradient(127deg, rgba(2, 140, 153, 0.8), rgba(6, 155, 160, 0) 70.71%);
  position: fixed;
}

#login:before {
  top: 0; left: 0;
  width: 100%; height: 100%;
  background:  linear-gradient(127deg, rgba(4, 127, 143, 0.8), rgba(3, 141, 165, 0) 70.71%),
  linear-gradient(217deg, rgba(2, 158, 106, 0.8), rgba(167, 88, 88, 0.397) 70.71%);
  content: '';
  display: block;
  position: absolute;
  opacity: 0;
  z-index: -100;
  transition: opacity 2.75s;
  animation: bgColorChange infinite;
  animation-duration: 3s;
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

.container {
  display: block;
  margin: auto;
  padding-top: 30px;
  margin-top: 100px;
  background: rgb(63, 70, 69);
  border-radius: 10px;
  box-shadow: 20px 20px 40px 17px rgba(15, 14, 14, 0.33);
  width: 600px;
  height: 300px;
}

.header {
  color:rgb(88, 212, 140);
}

.header p#title {
  font-weight: bold;
  font-size: 27px;
  margin: 3px 3px;
}

.header p#subtitle {
  margin: 3px 3px;
  font-size: 20px;
  color: rgb(209, 231, 148);
}

input {
  width: 350px;
  height: 30px;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 3px;
  font-size: 20px;
  outline: none;
  border-radius: 10px;
  border: none;
  background:rgb(195, 195, 201);
}

button {
  margin: 10px 10px;
  width: 100px;
  height: 40px;
  font-size: 20px;
  border-radius: 30px;
  border: none;
  color: rgb(236, 215, 175);
  background-color:rgb(70, 180, 116);
  transition: all 1s ease;
}

button:hover {
  cursor: pointer;
  background-color:rgba(2, 140, 153, 0.8);
}

button:focus {
  outline: none;
}
</style>
