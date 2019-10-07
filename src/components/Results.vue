<template>

    <div id="results" class="centered">
      <ResultsOverlay />
      <Background />
        <h1 class="title">{{title}} </h1>
        <img id="badge" src="../assets/winner-badge.png"
            alt="badge"
            height="90"
            width="90">
         <img id="horseImg" src="../assets/horses/6_Mia-Mischief-1.jpg"
            alt="horse"
            height="280"
            width="340">
        <div class="ribbon">
          <div class="race_winner_caption">{{race_winner_caption}}</div>
        </div>

        <div class="fan_favorites_caption">{{fan_favorites_caption}}</div>
        <div class="favoritesContainer">
          <!-- /* line below returns votes in decreasing order */ -->
          <div v-for="numVotes in votes"  v-bind:key="numVotes" class="fanFavorite">
            <div class="entry" v-if="numVotes == 1 ">{{numVotes}} Vote :</div>
            <div class="entry" v-else>{{numVotes}} Votes :</div>
            <div class="entry">
              <!-- /* access horsesObject in this order and print the names */ -->
              <p class="entryNames" v-for="item in horses[numVotes]" :key="item">{{item}}</p>
            </div>
          </div>
       </div>
    </div>
</template>

<script>
import {dbHorseCollection} from '../store'
import Background from './ResultsBackground'
import ResultsOverlay from './ResultsOverlay'

export default {
  name: 'Results',
  data () {
    return {
      title: 'Aggie Stakes 2019 Results',
      race_winner_caption: 'Freshman Stripe',
      fan_favorites_caption: 'Fan Favorites',
      horses: {}, // (key, value[]) (votes, name[])
      votes: []
    }
  },
  /* Instead of an array of objects, used object that holds votes as its key.
      Each key will hold an array of horse names that have the same number of votes */
  created () {
    dbHorseCollection.onSnapshot(
      querySnapshot => {
        this.horses = {}
        this.votes = []
        querySnapshot.forEach(doc => {
          const numVotes = doc.data().votes
          const name = doc.id
          // check if numVotes has been put into map
          if (numVotes in this.horses) {
          // if true, this implies there exists an array of horsenames,
          //    so, we push the new horse name to the collection
            this.horses[numVotes].push(name)
          } else {
            // create a new array and push the horse name to it.
            this.horses[numVotes] = []
            this.horses[numVotes].push(name)
          }
        })
        // Sort the keys (aka votes) in decreasing order.
        //  we can retrieve the list of names in this order.
        this.votes = Object.keys(this.horses)
        this.votes.sort((a, b) => (b - a))
      }
    )
  },
  components: {
    Background,
    ResultsOverlay
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Assistant&display=swap');
@import url('https://fonts.googleapis.com/css?family=Petit+Formal+Script&display=swap');

/* note that font can be set in the outermost wrapper, the children will follow */
#results {
  display: block;
  margin: 0 auto;
  font-family: 'Cinzel', serif;
  color: rgb(53, 39, 39);
}

.title {
  margin-top: 40px;
  margin-bottom: 0;
}

.favoritesContainer {
  margin: 0 auto;
  width: 30%;
}
.fanFavorite{
  display: grid;
  grid-template-columns: 43% 57%;
  align-items: start;
  font-size: 15px;
  font-family: 'Assistant', sans-serif;
}

.race_winner_caption{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  font-size: 40px;
}
.fan_favorites_caption{
  padding-top: 70px;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  font-size: 30px;
}

.entry{
  padding-right: 10px;
  min-width: 20%;
  white-space: pre;
  text-align: right;
}

.entryNames {
  padding-right: 20px;
  white-space: pre;
  margin-top: 0;
  margin-bottom: 5px;
  text-align: left;
}

.title{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 57px;

}
#horseImg {
  box-shadow: 20px 20px 40px 17px rgba(0, 0, 0, .33);
}

img#badge {
  position: absolute;
  left: 32%;
  top: 47%;
  z-index: 2;
  animation: sway 0.9s infinite;
  animation-direction: alternate;
}

@keyframes sway {
  0% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
}

.ribbon {
 /* font-size: 16px !important; */
 /* This ribbon is based on a 16px font side and a 24px vertical rhythm.
 I've used em's to position each element for scalability.
 If you want to use a different font size you may have
    to play with the position of the ribbon elements */
 width: 400px;
 position: absolute;
 background: rgb(231, 199, 172);
 color: rgb(92, 74, 68);
 text-align: center;
 padding: 1em 2em; /* Adjust to suit */
 right: 465px;
 top: 380px;
 font-family: 'Petit Formal Script', cursive;
 font-weight: bold;
}
.ribbon:before, .ribbon:after {
 content: "";
 position: absolute;
 display: block;
 bottom: -1em;
 border: 1.5em solid rgb(189, 163, 141);
 z-index: -1;
}
.ribbon:before {
 left: -2em;
 border-right-width: 1.5em;
 border-left-color: transparent;
}
.ribbon:after {
 right: -2em;
 border-left-width: 1.5em;
 border-right-color: transparent;
}
.ribbon .ribbon-content:before, .ribbon .ribbon-content:after {
 content: "";
 position: absolute;
 display: block;
 border-style: solid;
 border-color: rgb(189, 163, 141) transparent transparent transparent;
 bottom: -1em;
 font-size: 40px;
}
.ribbon .ribbon-content:before {
 left: 0;
 border-width: 1em 0 0 1em;
}
.ribbon .ribbon-content:after {
 right: 0;
 border-width: 1em 1em 0 0;
}
</style>
