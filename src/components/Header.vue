<template>
  <div id="header">
  <div id="headerImageContainer">
    <img src="~@/assets/logo.png" id="headerImage" />
  </div>
  </div>
</template>
<style scoped>
#header {
  position: sticky;
  height: 80px;
  width: 100%;

  top: 0;
  background-color: #3fb1ea;
  /* opacity: 80%; */
}
#headerImageContainer {
    float: left;
    padding: 8px;
}
#headerImage {
  height: 80%;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background: white;
}
</style>
