<template>
  <div id="app">
    <div style="height: 100vh; z-index: 20;">
      <img alt="Splash Mountain" src="./assets/logo.png" style=" width: 50vw;" />
      <h1 style=" margin-top: 2px;">November 6-8</h1>
      <RegisterButton type="signUp" />
    </div>
    <Home />
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import RegisterButton from "./components/RegisterButton.vue";

export default {
  name: "App",
  components: {
    Home,
    RegisterButton,
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

h1 {
  color: #3fb1ea;
  font-size: 35pt;
  text-transform: uppercase;
}

p {
  font-size: 20pt;
}
</style>
