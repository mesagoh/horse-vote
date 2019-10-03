<template>
    <div id="results">
      <div class="wrapper">

        <h1 class="title"> {{title}} </h1>
        <div class="race_winner_caption">{{race_winner_caption}}</div>
        <div class="race_winner">
          <img id="horseImg" :src="require(`@/assets/horses/${this.horseItems[0].imgSrc}`)"
               alt="horse"
               height="190"
               width="230">
        </div>

        <div class="fan_favorites_caption">{{fan_favorites_caption}}</div>
        <div class="fan_favorite_one">
          <h2>#1 {{fan_fav_1.name}} {{fan_fav_1.votes}}</h2>
          <h2>Name: {{fan_fav_1.name}}</h2>
          <h2>Votes: {{fan_fav_1.votes}}</h2>
        </div>
        <div class="fan_favorite_two">
          <h2>#1 {{fan_fav_2.name}} {{fan_fav_2.votes}}</h2>
          <h2>Name: {{fan_fav_2.name}}</h2>
          <h2>Votes: {{fan_fav_2.votes}}</h2>
        </div>
        <div class="fan_favorite_three">
          <h2>#1 {{fan_fav_3.name}} {{fan_fav_3.votes}}</h2>
          <h2>Name: {{fan_fav_3.name}}</h2>
          <h2>Votes: {{fan_fav_3.votes}}</h2>
        </div>

      </div>
      <ul>
        <li v-for="horse in horses" v-bind:key="horse">
          Horse ID: {{horse.id}}  Number of Votes: {{horse.NumberOfVotes}}
        </li>
      </ul>
    </div>

</template>

<script>
import {dbHorseCollection} from '../store'
export default {
  name: 'Results',
  // extends: Bar,
  data () {
    return {
      title: 'Aggie Stakes 2019 Results',
      race_winner_caption: '1st Place',
      fan_favorites_caption: 'Fan Favorites',
      horses: [],
      horseItems: [
        {key: 1, imgSrc: '1_Saltbae.jpg'},
        {key: 2, imgSrc: '2_Vision-of-Justice.jpg'},
        {key: 3, imgSrc: '3_Criminal-Mischief.jpg'},
        {key: 4, imgSrc: '4_Clays-Dialing-In.jpg'},
        {key: 5, imgSrc: '5_Miss-Brooklyn-Bralwer.jpg'},
        {key: 6, imgSrc: '6_Mia-Mischief-1.jpg'},
        {key: 7, imgSrc: '7_TurboShaft.jpg'},
        {key: 8, imgSrc: '8_Buy-Sell-Hold.png'}
      ],
      fan_fav_1: {
        name: 'fan fav 1',
        votes: 1000
      },
      fan_fav_2: {
        name: 'fan fav 2',
        votes: 100
      },
      fan_fav_3: {
        name: 'fan fav 3',
        votes: 10
      }
    }
  },
  created () {
    dbHorseCollection.onSnapshot(
      querySnapshot => {
        this.horses = []
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'NumberOfVotes': doc.data().NumberOfVotes
          }
          this.horses.push(data)
        })
      }
    )
  }
}
</script>

<style scoped>
.header-style {

}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(10,auto);
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
  font-size: 50px;
  font-family: 'Cinzel', serif;
}
.fan_favorites_caption{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  font-size: 50px;
  font-family: 'Cinzel', serif;
}
.fan_favorite_one{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
}
.fan_favorite_two{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
}
.fan_favorite_three{
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
}
.title{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 50px;
  font-family: 'Cinzel', serif;
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
#horseImg {
  box-shadow: 20px 20px 40px 17px rgba(0, 0, 0, .33);

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
