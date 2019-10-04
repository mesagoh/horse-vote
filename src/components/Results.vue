<template>
    <div id="results" class="centered">
      <div class="wrapper">

        <h1 class="title">{{title}} </h1>
        <div class="race_winner_caption">{{race_winner_caption}}</div>
        <div class="race_winner">
          <img id="horseImg" :src="require(`@/assets/horses/${this.horseItems[5].imgSrc}`)"
               alt="horse"
               height="190"
               width="230">
        </div>

        <div class="fan_favorites_caption">{{fan_favorites_caption}}<hr class="style-seven"/></div>
        <hr class="style18">
        <div class="fan_favorite_1">
          <h3>#{{this.horses[0].place}}. {{this.horses[0].id}} ({{this.horses[0].votes}} Votes)</h3>
        </div>
         <div class="fan_favorite_2">
           <h3>#{{this.horses[1].place}}. {{this.horses[1].id}} ({{this.horses[1].votes}} Votes)</h3>
          </div>
          <div class="fan_favorite_3">
            <h3>#{{this.horses[2].place}}. {{this.horses[2].id}} ({{this.horses[2].votes}} Votes)</h3>
          </div>

       </div>

      <div class="wrapper2">
        <div class="fan_favorite_4"><h4>#{{this.horses[3].place}}. {{this.horses[3].id}}</h4></div>
        <div class="fan_favorite_5"><h4>#{{this.horses[4].place}}. {{this.horses[4].id}}</h4></div>
        <div class="fan_favorite_6"><h4>#{{this.horses[5].place}}. {{this.horses[5].id}}</h4></div>
        <div class="fan_favorite_7"><h4>#{{this.horses[6].place}}. {{this.horses[6].id}}</h4></div>
        <div class="fan_favorite_8"><h4>#{{this.horses[7].place}}. {{this.horses[7].id}}</h4></div>
      </div>

    </div>
</template>

<script>
import {dbHorseCollection} from '../store'

function setPlace (horses) {
  let place = 1
  let numInPlace = 1
  for (let i = 0; i < horses.length; i++) {
    horses[i].place = place

    if (i === horses.length - 1) {
      horses[i].place = place
      break
    }
    if (horses[i].votes === horses[i + 1].votes) {
      numInPlace++
    } else {
      place += numInPlace
      numInPlace = 1
    }
  }
}

function sortHorses (horses) {
  horses.sort(function (a, b) {
    return b.votes - a.votes
  })
}

export default {
  name: 'Results',
  data () {
    return {
      title: 'Aggie Stakes 2019 Results',
      race_winner_caption: '1st Place: Freshman Stripe',
      fan_favorites_caption: 'Fan Favorites',
      horses: [
        {
          'votes': '',
          'place': '',
          'id': ''
        },
        {
          'votes': '',
          'place': '',
          'id': ''
        },
        {
          'votes': '',
          'place': '',
          'id': ''
        },
        {
          'votes': '',
          'place': '',
          'id': ''
        },
        {
          'votes': '',
          'place': '',
          'id': ''
        },
        {
          'votes': '',
          'place': '',
          'id': ''
        },
        {
          'votes': '',
          'place': '',
          'id': ''
        },
        {
          'votes': '',
          'place': '',
          'id': ''
        }
      ],
      horseItems: [
        {key: 1, imgSrc: '1_Saltbae.jpg'},
        {key: 2, imgSrc: '2_Vision-of-Justice.jpg'},
        {key: 3, imgSrc: '3_Criminal-Mischief.jpg'},
        {key: 4, imgSrc: '4_Clays-Dialing-In.jpg'},
        {key: 5, imgSrc: '5_Miss-Brooklyn-Bralwer.jpg'},
        {key: 6, imgSrc: '6_Mia-Mischief-1.jpg'},
        {key: 7, imgSrc: '7_TurboShaft.jpg'},
        {key: 8, imgSrc: '8_Buy-Sell-Hold.png'}
      ]
    }
  },
  created () {
    dbHorseCollection.onSnapshot(
      querySnapshot => {
        this.horses = []
        querySnapshot.forEach(doc => {
          const data = {
            'votes': doc.data().votes,
            'place': 0,
            'id': doc.id
          }
          this.horses.push(data)
        })
        sortHorses(this.horses)
        setPlace(this.horses)
      }
    )
  }
}
</script>

<style scoped>
.centered {
  padding-top: 10px;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(10,auto);
  padding-left: 100px;
  padding-right: 100px;
}
.wrapper2 {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(1,auto);
  padding-left: 100px;
  padding-right: 100px;
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
  font-family: 'Cinzel', serif;
}
.fan_favorites_caption{
  padding-top: 40px;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  font-size: 40px;
  font-family: 'Cinzel', serif;
}
.fan_favorite_1{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  font-family: 'Cinzel', serif;
}
.fan_favorite_2{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  font-family: 'Cinzel', serif;
}
.fan_favorite_3{
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
  font-family: 'Cinzel', serif;
}
.fan_favorite_4{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-family: 'Cinzel', serif;
}
.fan_favorite_5{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  font-family: 'Cinzel', serif;
}
.fan_favorite_6{
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  font-family: 'Cinzel', serif;
}
.fan_favorite_7{
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  font-family: 'Cinzel', serif;
}
.fan_favorite_8{
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
  font-family: 'Cinzel', serif;
}
.title{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 50px;
  font-family: 'Cinzel', serif;
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
