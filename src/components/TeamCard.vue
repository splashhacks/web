<template>
  <div class = "card" >
   <div><img :src="image" class="image" /></div>
   <div><h2 class="name">{{name}}</h2></div>
   <div><p class="position">{{position}}</p></div>
   <div class="socialButtons">
     <a :href="linkedin" class="socialButton"><img src="@/assets/linkedin.svg"/></a>
     <a :href="github" class="socialButton"><img src="@/assets/github.svg"/></a>
     <a :href="instagram" class="socialButton"><img src="@/assets/instagram.svg"/></a>

   </div>
  </div>
  
</template>
<style scoped>
.image{
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
}
.card{
  background-color: #f9f9f9;
  margin: 10px;
  display: block;
  padding: 16px;
  max-width: 300px;
  
}

.name {
  margin: 0px;
}

.position {
  margin: 0px 0px 10px 0px;

}

.socialButton {
padding-left: 6px;
  padding-right: 6px;
}
.socialButton img {
  height: 25px;
  

}
</style>
<script>
export default {
  props: ["image","position","name", "instagram", "github", "linkedin"],
};
</script>
