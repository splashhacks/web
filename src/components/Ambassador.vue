<template>
  <div class="card">
<img :src="image" class="image" />
    <div class="socialButtons">
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
    <div style=" text-align: left">
      <h3 class="name">{{name}}</h3>
    </div>
  </div>
</template>
<style scoped>
.image {
  border-radius: 10px;
  object-fit: cover;
  width: 75px;
  height: 75px;
  object-position: 50% 0%;
}
.card{
    padding: 15px;
    align-items: center;
    margin:0 auto;
}


.name {
  margin: 0px;
  text-align: center;
  font-size: 12pt;
}

.position {
  padding-right: 5px;
  margin: 0px;
}

.socialButtons {
  margin: auto;
  display: flex;
  justify-content: center;
}

.socialButton {
  padding: 0px;
  display: block;
}

.socialButton img {
  height: 15px;
  padding: 5px;
}
</style>
<script>
export default {
  props: ["image","name", "instagram", "github", "linkedin"],
};
</script>
