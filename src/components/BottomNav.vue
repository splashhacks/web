<template>
  <div class="bottomCredits">
    <!-- Formatting is still screwed up -->
    <img src="@/assets/sandsplash.png" alt="SplashHacks Logo" style=" width: 15vw;" />
    <div class="indImg">
      <a :href="linkedin" class="socialButton">
        <img src="@/assets/linkedin.svg" />
      </a>
    </div>
    <div class="indImg">
      <a :href="instagram" class="socialButton">
        <img src="@/assets/instagram.svg" />
      </a>
    </div>
    <p>© 2020 SplashHacks</p>
  </div>
</template>
<style scoped>
.indImg {
  float: right;
  width: 25%;
  margin-top: 3%;
  margin-left: 10px;
}

.bottomCredits {
  backdrop-filter: blur(80px);
  margin: 30px;
  border-radius: 20px;
  background-color: rgb(256, 256, 256);
  float: center;
  bottom: 0;
  padding: 10px;
}

.socialButtons {
  margin: auto;
}

.socialButton {
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  flex: 50%;
}

.socialButton img {
  height: 30px;
  padding: 5px;
}
</style>

<script>
export default {
  props: ["linkedin", "instagram"]
};
</script>