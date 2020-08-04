<template>
  <div id="header">
    <div id="headerImageContainer">
      <a href="#top"><img src="~@/assets/splashwhite.png" id="headerImage"/></a>
    </div>
    <div id="headerLinksContainer">
      <Link id="#About" name="About" />
      <Link id="#Prizes" name="Prizes" />
      <Link id="#FAQ" name="FAQ" />
      <Link id="#Team" name="Team" />

      

    </div>
  </div>
</template>
<script>
import Link from "./Link.vue";
export default {
  components: {
    Link,
  },
};
</script>
<style scoped>
#header {
  position: sticky;
  height: 80px;
  width: 100%;
  opacity: 84%;

  top: 0;
  background-color: #96cff2;
  /* opacity: 80%; */
}

#headerLinksContainer {
  float: right;
  padding: 8px;
  height: 64px;
}
#headerImageContainer {
  float: left;
  padding: 8px;
  padding-left: 5vh;
}
#headerImage {
  height: 80%;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
