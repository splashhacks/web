<template>
  <div id="header">
  <div id="headerImageContainer">
    <a href="#top"><img src="~@/assets/splashwhite.png" id="headerImage" /></a>
  </div>
  </div>
</template>
<style scoped>
#header {
  position: sticky;
  height: 80px;
  width: 100%;
  opacity: 50%;

  top: 0;
  background-color: #3fb1ea;
  /* opacity: 80%; */
}

#headerImageContainer {
    float: left;
    padding: 8px;
    padding-left:5vh;
}
#headerImage {
  height: 80%;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

}
</style>
