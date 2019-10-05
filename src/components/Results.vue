<template>
    <div id="results" class="centered">

        <h1 class="title">{{title}} </h1>
        <div class="race_winner_caption">{{race_winner_caption}}</div>
        <div class="race_winner">
          <img id="horseImg" src="../assets/horses/6_Mia-Mischief-1.jpg"
               alt="horse"
               height="250"
               width="300">
        </div>

        <div class="fan_favorites_caption">{{fan_favorites_caption}}</div>
        <div class="favoritesContainer">
          <!-- /* line below returns votes in decreasing order */ -->
          <div v-for="numVotes in votes"  v-bind:key="numVotes" class="fanFavorite">
            <div class="entry" v-if="numVotes > 1">{{numVotes}} Votes :</div>
            <div class="entry" v-else>{{numVotes}} Vote :</div>
            <div class="entry">
              <!-- /* access horsesObject in this order and print the names */ -->
              <span class="entryNames" v-for="item in horses[numVotes]" :key="item">{{item}}</span>
            </div>
          </div>
       </div>
    </div>
</template>

<script>
import {dbHorseCollection} from '../store'

export default {
  name: 'Results',
  data () {
    return {
      title: 'Aggie Stakes 2019 Results',
      race_winner_caption: '1st Place: Freshman Stripe',
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
  }
}
</script>

<style scoped>
/* note that font can be set in the outermost wrapper, the children will follow */
#results {
  display: block;
  margin: 0 auto;
  font-family: 'Cinzel', serif;
}

.favoritesContainer {
  margin: 0 auto;
  width: 30%;
}
.fanFavorite{
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  align-items: start;
}

.race_winner{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
.race_winner_caption{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  font-size: 40px;
}
.fan_favorites_caption{
  padding-top: 40px;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  font-size: 40px;
}

.entry{
  padding-right: 10px;
  min-width: 30px;
  white-space: pre;
}

.entryNames {
  padding-right: 20px;
  white-space: pre;
}

.title{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 50px;
}
#horseImg {
  box-shadow: 20px 20px 40px 17px rgba(0, 0, 0, .33);
}
/* Flaired edges, by Tomas Theunissen */

hr.style-seven {
  overflow: visible; /* For IE */
  height: 30px;
  border-style: solid;
  border-color: black;
  border-width: 1px 0 0 0;
  border-radius: 20px;
}
hr.style-seven:before { /* Not really supposed to work, but does */
  display: block;
  content: "";
  height: 30px;
  margin-top: -31px;
  border-style: solid;
  border-color: black;
  border-width: 0 0 1px 0;
  border-radius: 20px;
}

</style>
/*

font-family: 'Lobster', cursive;

font-family: 'Dancing Script', cursive;

font-family: 'Cinzel', serif;

font-family: 'Tangerine', cursive;

font-family: 'Playball', cursive;

font-family: 'Italianno', cursive;

font-family: 'Niconne', cursive;

*/
