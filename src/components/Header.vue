<template>
    <div class="header">
        <h1> {{title}} </h1>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'Vote for your horse! 🐎'
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
    color: black;
}

</style>
