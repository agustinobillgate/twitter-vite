<template>
  <div class="container">
    <Profile username="parys410" name="Ary Setiyawan" desc="Have a Nice Day" location="Badung, Bali, Indonesia"
      created="July 2010" following="305" follower="170"></Profile>
  </div>
  <RouterView></RouterView>

</template>

<script>
import "../src/assets/main.css";
import Profile from "./components/Profile.vue";

export default {
  components: { Profile }
}
</script>

<style scoped>

</style>