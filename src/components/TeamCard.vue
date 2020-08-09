<template>
  <div class="card">
    <img :src="image" class="image" />
    <div class="socialButtons" style="grid-row: 1;">
      <a :href="linkedin" class="socialButton">
        <img src="@/assets/linkedin.svg" />
      </a>
      <a :href="github" class="socialButton">
        <img src="@/assets/github.svg" />
      </a>
      <a :href="instagram" class="socialButton">
        <img src="@/assets/instagram.svg" />
      </a>
    </div>
    <div style="grid-row: 1; text-align: left">
      <h3 class="name">{{name}}</h3>
      <p class="position">{{position}}</p>
    </div>
  </div>
</template>
<style scoped>
.image {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  height: 100px;
  object-fit: cover;
  grid-row: 1;
}

.card {
    z-index: 10;

  display: grid;
  grid-template-columns: 100px 40px calc(100% - 140px);
  /* padding-left: 10px; */
}

.name {
  margin: 0px;
}

.position {
  padding-right: 5px;
  margin: 0px;
}

.socialButtons {
  margin: auto;
}

.socialButton {
  padding: 0px;
  display: block;
}

.socialButton img {
  height: 20px;
  padding: 5px;
}
</style>
<script>
export default {
  props: ["image", "position", "name", "instagram", "github", "linkedin"],
};
</script>
