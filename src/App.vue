<template>
  <div id="app" class="background">
    <div style="height: 100vh; z-index: 20;">
      <div style="margin-top: 20pt">
        <img
          alt="Splash Mountain"
          src="./assets/logo.png"
          style=" width: 50vw;"
        />
      </div>
      <div class="wrap">
        <h1 style="margin: 10pt">Spring 2020</h1>
        <RegisterButton style="margin: 10pt;" />
      </div>
      <DownArrow />
    </div>
    <div class="waterWrapper">
      <Home />
      <div>
        <CreditBar />
        <svg viewBox="0 0 30 5 " class="sandSVG">
          <ellipse cx="10" cy="25" rx="25" ry="25" fill="var(--sand-dark)" />
          <ellipse cx="25" cy="25" rx="25" ry="25" fill="var(--sand-light)" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import RegisterButton from "./components/RegisterButton.vue";
import DownArrow from "./components/DownArrow.vue";
import CreditBar from "@/sections/CreditBar.vue";

export default {
  name: "App",
  components: {
    Home,
    RegisterButton,
    DownArrow,
    CreditBar,
  },
};
</script>

<style>
.sandSVG {
  width: 100%;
  background: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #002042;
}

h1 {
  color: var(--splash-light);
  font-size: 35pt;
  text-transform: uppercase;
  margin: 15px;
}

@media (max-width: 600px) {
  h1 {
    font-size: 25pt;
  }
}

h2 {
  color: var(--sky);
  font-size: 35pt;
  text-transform: uppercase;
  margin: 15px;
}

h3 {
  font-size: 30pt;
  color: var(--sky);
  /* text-transform: uppercase; */
}

p1 {
  font-size: 20pt;
  display: block;
  margin: 15px;
  color: var(--splash-black);
}

p2 {
  font-size: 16pt;
  display: block;
  margin: 15px;
  color: var(--sky);
}

.waterWrapper {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(63, 177, 234, 0.5) 100%
  );
}

.wrap {
  display: inline-flex;
}

@media screen and (max-width: 720px) {
  .wrap {
    display: block;
  }
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
:root {
  --splash-light: #3fb1ea;
  --splash-dark: #003c7e;
  --splash-black: #002042;
  --splash-mute: #cbd4df;
  --focus: #fba919;
  --sand-light: #f9ce8a;
  --sand-dark: #e0ae7f;
  --sky: #ffffff;
}
</style>
