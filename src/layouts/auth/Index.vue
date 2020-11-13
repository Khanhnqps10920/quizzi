<template>
  <v-app light class="auth-page px-2">
    <div class="wrapper">
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </div>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  margin: 0;
  padding: 0 15px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(120deg, #2980b9, #8e44ad);
}
</style>