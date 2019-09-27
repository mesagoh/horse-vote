<template>
  <div id="login">
    <div class='container'>
      <h2>Admin Login</h2>
      <input type="email"  name="email" placeholder="Username" v-model="email"><br>
      <input type="password" name="password" placeholder="Password" v-model="password">
    </div>
    <div>
      <button v-on:click='login' >Login</button>
    </div>
    <div>
      <button v-on:click='logout' >Logout</button>
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
      password: ''
    }
  },
  methods: {
    login: function (e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You are logged in as ${user.username}`)
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
          alert(`You are logged out.`)
        })
    }
  }
}
</script>

<style scoped>
#login {
  top: 0; left: 0;
  width: 100%; height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
.mask {
  display: grid;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background:rgba(80, 78, 78, 0.315);
}

.container {
  display: block;
  margin: auto;
  padding-top: 30px;
  margin-top: 100px;
  background: rgb(63, 70, 69);
  border-radius: 10px;
  box-shadow: 20px 20px 40px 17px rgba(15, 14, 14, 0.33);
  width: 40vw;
  height: 40vh;
}

h2 {
  color:rgb(88, 212, 140);
}

input {
  width: 300px;
  height: 30px;
  margin: 10px 5px;
  padding: 3px;
  outline: none;
  border-radius: 10px;
  border: none;
  background:rgb(195, 195, 201);
}
</style>
