<template>
  <div id="topHeader" style="opacity: 84%;">
    <div id="headerImageContainer">
      <a href="#top">
        <img src="~@/assets/splashwhite.png" id="headerImage" />
      </a>
    </div>
    <div id="headerLinksContainer">
      <Link id="#about" name="About" class="headerButton" />
      <Link id="#prizes" name="Prizes" class="headerButton" />
      <Link id="#faq" name="FAQ" class="headerButton" />
      <Link id="#team" name="Team" class="headerButton" />
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
  color: var(--sky);
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
  color: var(--sky);
}

#topHeader {
  /* -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px); */

  position: sticky;
  height: 80px;
  width: 100%;
  top: 0;
}

#headerLinksContainer {
  backdrop-filter: blur(80px);
  margin: 8px;
  border-radius: 20px;
  background-color: rgb(0, 60, 126, 0.7);
  float: right;
}
#headerImageContainer {
  float: left;
  padding: 8px;
  padding-left: 16px;
}
#headerImage {
  height: 80%;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
@media (min-width: 680px) {
  #headerLinksContainer{
    display: none;
  }
}
</style>
