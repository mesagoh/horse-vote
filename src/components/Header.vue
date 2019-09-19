<template>
    <div class="header">
        <h1> {{title}} </h1>
        <h2> {{subtitle}} </h2>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'Hello there!',
      subtitle: 'Please cast your vote by selecting the horse 🐎'
    }
  }
}
</script>

<style scoped>
/* Title Styling */
h1 {
    color:black;
}

/* Subtitle Styling */
h2 {
    color: red;
}

</style>
