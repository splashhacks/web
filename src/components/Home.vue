<template>

  <div>
     <Header/>
    <div class="content">
     
       <div class="card">
         <h1 class="subtitle">
         About <img src="~@/assets/logo.png" id="smallImg">
         </h1>
      </div> 
      <div class="infoBox">
      <!-- Placeholder image (probably doesn't need an image anyway) -->
      <div><img src="~@/assets/helping.jpg" id="medImg"></div>
      <div><p>Welcome to Splash!</p></div>
      </div>
    </div>
    <div class="content">
      <div class="card">
      <h1 class="subtitle">
      Prizes
      </h1>
      </div>
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

.infoBox {
  flex-wrap:wrap;
  flex-direction:column-reverse;
}

#smallImg {
  height:8vh;
  vertical-align:-15%;
}

#medImg {
  height:35vh;
  vertical-align:-15%;
  border-radius:50%
}

.content {
  height: 65vh;
  padding-top:10vh;
}
.subtitle {
  color:#3fb1ea;
  font-size:50px;

}
.card {
  padding: 20pt;
  background-color: white;
}
</style>
