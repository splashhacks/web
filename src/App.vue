<template>
  <div id="app" class="background">
    <div style="height: 100vh; z-index: 20;">
      <div style="margin-top: 20pt">
        <img alt="Splash Mountain" src="./assets/logo.png" style=" width: 50vw;" />
      </div>
      <div style="display: inline-flex;">
        <h1 style="margin: 10pt">November 6-8</h1>
        <RegisterButton style="margin: 10pt;" />
      </div>
    </div>
    <div class="waterWrapper">
      <Home />
    </div>
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
}

h1 {
  color: #3fb1ea;
  font-size: 35pt;
  text-transform: uppercase;
  margin: 20px;
}

p1 {
  font-size: 20pt;
  display: block;
  margin: 20px;
}

.waterWrapper {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(63, 177, 234, 0.5) 100%
  );
}

.background {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 20, 121, 1) 35%,
    rgba(196, 231, 255, 1) 73%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
