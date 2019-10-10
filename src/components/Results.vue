<template>

    <div id="results" class="centered">
      <ResultsOverlay />
      <Background />
        <h1 class="title">{{title}} </h1>
         <img id="horseImg" src="../assets/horses/6_Mia-Mischief-1.jpg"
            alt="horse">
        <div class="banner">
          <div class="ribbon">
            <div class="race_winner_caption">{{race_winner_caption}}</div>
          </div>
        </div>

        <div class="fan_favorites_caption">{{fan_favorites_caption}}</div>
        <div class="favoritesContainer">
          <!-- /* line below returns votes in decreasing order */ -->
          <div v-for="numVotes in votes"  v-bind:key="numVotes" class="fanFavorite">
            <div class="entry" v-if="numVotes == 1 ">{{numVotes}} Vote :</div>
            <div class="entry" v-else>{{numVotes}} Votes :</div>
            <div class="entry">
              <!-- /* access horsesObject in this order and print the names */ -->
              <p class="entryNames" v-for="item in horses[numVotes]" :key="item">
                <span class="number">{{horseNums[item]}}</span>
                <span class="horseName"> {{item}}</span>
              </p>
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
      race_winner_caption: 'Race Winner: Freshman Stripe',
      fan_favorites_caption: 'Fan Ranking',
      horses: {}, // (key, value[]) (votes, name[])
      votes: [],
      horseNums: {
        'Putah Ring on It': 1,
        'Mrak in the Saddle': 2,
        'Arboretum-n-Weep': 3,
        'Karma Patrol': 4,
        'Kemper Temper': 5,
        'Freshman Stripe': 6,
        'Healthy as a Horse': 7,
        'Double Major': 8
      }
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
  font-weight: 600;
}
.fanFavorite{
  display: grid;
  grid-template-columns: 45% 55%;
  align-items: start;
  font-size: 18px;
  font-family: 'Assistant', sans-serif;
  font-weight: 600;
}

.race_winner_caption{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  font-size: 35px;
  font-weight: 600;
}
.fan_favorites_caption{
  padding-top: 70px;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  font-size: 32px;
  font-weight: 600;
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
  width: 25vw;
  height: auto;
  box-shadow: 20px 20px 40px 17px rgba(0, 0, 0, .33);
}

.banner {
  /* display: block; */
  position:relative;
  max-width: 100px; height: 8px;
  /* overflow: hidden; */
}

img#badge {
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
 width: 600px;
 position: absolute;
 background: rgb(231, 199, 172);
 color: rgb(92, 74, 68);
 text-align: center;
 padding: 1em 2em; /* Adjust to suit */
 left: 50vw;
 margin-left: -332px;
 top: -15px;
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
.number {
  display: inline-block;
  background:#004aa8;
  border-radius: 100%;
  width: 25px;
  font-size: 20px;
  text-align: center;
  color: #d9b000;
}

.horseName {
  font-size: 20px;
  padding-left: 5px;
  padding-right: 20px;
  color: #6e5b02;
}

</style>
