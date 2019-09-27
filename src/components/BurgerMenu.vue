<template>
    <div id="burger-button" v-on:click="$emit('toggle-side-nav')">
        <hr id="top-line"/>
        <hr id="mid-line"/>
        <hr id="bottom-line"/>
        <button id="app-show-votes">
          Button
        </button>
    </div>
</template>

<script>
export default {
  name: 'BurgerMenu'
}
</script>

<style scoped>

#app-show-votes {
  display:none
}

#burger-button {
  float:right;
  width: 27px;
  height: 40px;
  margin-right: 30px;
  margin-top: 30px;
}

/* Draw burger menu */
#burger-button #top-line,
#burger-button #mid-line,
#burger-button #bottom-line {
    display: block;
    margin: 5px auto;
    height: 1px;
    width: 100%;
    border: 0;
    border-top: 4px solid rgb(71, 68, 68);
}

#burger-button:hover {
  cursor: pointer;
}

</style>
