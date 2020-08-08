<template>
  <div class="bottomCredits">
    <img alt="SplashHacks Logo" src="@/assets/logo.png" style=" width: 15vw;" />
    <a :href="linkedin" class="socialButton">
      <img src="@/assets/linkedin.svg" />
    </a>
    <a :href="instagram" class="socialButton">
      <img src="@/assets/instagram.svg" />
    </a>
    <p>© 2020 SplashHacks</p>
  </div>
</template>
<style scoped>
.bottomCredits {
  backdrop-filter: blur(80px);
  margin: 16px;
  border-radius: 20px;
  background-color: var(--sand-light);
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
}

.socialButton img {
  height: 20px;
  padding: 5px;
}
</style>

<script>
export default {
  props: ["linkedin", "instagram"]
};
</script>