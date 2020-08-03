<template>
  <div id="app">
    <div style="height: 100vh; z-index: 20;">
      <img alt="Splash Mountain" src="./assets/logo.png" style=" width: 50vw;" />
      <h1>November 6-8</h1>
      <a href="https://forms.gle/HpvPySwZnRnmfyGB9">Register now</a>
    </div>
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
