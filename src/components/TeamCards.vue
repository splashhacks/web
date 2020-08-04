<template>
  <div class = "card" >
   <div class= "column"><img :src="image" class="image" /></div>
  <div class = "column"><slot></slot></div>
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
  background-color: blue;
  margin: 10pt;
  display: grid;
  grid-auto-columns: 1fr;
}
.column{
  grid-row:1;
}
</style>
<script>
export default {
  props: ["id", "image"],
};
</script>
