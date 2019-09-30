<template>
    <div id="results">
      <h1> {{title}} </h1>
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
  data () {
    return {
      title: 'Voting Results cant read unless logged in..maybe fixx',
      horses: [],
      anNewVar: 'some test'
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

</style>
