<template>
  <div class = "card" >
   <div><img :src="image" class="image" /></div>
  <div><slot></slot></div>
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

</style>
<script>
export default {
  props: ["id", "image"],
};
</script>
