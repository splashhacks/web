<template>

  <div>
     <Header/>
    <div class="content">
     
       <div class="card">content goes here</div> 
    </div>
    <div class="content">
     
       <div class="card">content goes here</div> 
    </div>
  </div>

</template>
<script>
import Header from "./Header.vue";
export default {
  components :{
    Header
  }
}
</script>
<style scoped>
.content {
  height: 200vh;
}
.card {
  padding: 20pt;
  background-color: white;
}
</style>
