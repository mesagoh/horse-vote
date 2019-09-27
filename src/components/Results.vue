<template>
    <div id="results">
        Results
        {{this.setCollection}}
    </div>
</template>

<script>
import {dbHorseCollection} from '../store'

export default {
  name: 'Results',
  data () {
    return {
      collection: []
    }
  },
  methods: {
    setCollection () {
      dbHorseCollection.onSnapshot((snapshot) => {
        snapshot.forEach((horse, index) => {
          let ref = dbHorseCollection.doc(index.toString())
          this.collection.push({id: horse.id, numVotes: ref.data().NumberOfVotes})
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
