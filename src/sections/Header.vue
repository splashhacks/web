<template>
  <div id="topHeader" style="opacity: 84%;">
    <div id="headerImageContainer">
      <a href="#top">
        <img src="~@/assets/splashwhite.png" id="headerImage" />
      </a>
    </div>
    <div id="headerLinksContainer">
      <Link id="#About" name="About" class="headerButton" />
      <Link id="#Prizes" name="Prizes" class="headerButton" />
      <Link id="#FAQ" name="FAQ" class="headerButton" />
      <Link id="#Team" name="Team" class="headerButton" />
    </div>
  </div>
</template>
<script>
import Link from "@/components/Link.vue";
export default {
  components: {
    Link,
  },
};
</script>
<style scoped>
.headerButton {
  font-weight: bold;
  border-radius: 3px;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  margin: 6px 2px;
  cursor: pointer;
}

.headerButton:hover {
  text-decoration: none;
  color: white;
}

#topHeader {
  position: sticky;
  height: 80px;
  width: 100%;
  top: 0;
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
