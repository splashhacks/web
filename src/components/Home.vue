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
      <div><img src="~@/assets/helping.jpg" id="infoImg"></div>
      <div id="infoDetails"><pre>
        While most online Hackathons are great experiences 
        for learning, testing out new ideas, and advancing 
        technical skills, they tend to focus on individual 
        teams more than the Hacker Community as a whole. 
        At SplashHacks, we aim to provide a stimulating and 
        deeply interconnected event for new and advanced 
        programmers, graphic designers, and technical visionaries 
        alike. During our event, high school and college students 
        will have a 36-hour period to bring their ideas to life, 
        filled with events for peer-to-peer connection and collaboration. </pre></div>
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
      <div class="card">
      <h1 class="subtitle">
      Frequently Asked Questions
      </h1>
      </div>
    </div>
    <div class="content">
      <div class="card">
      <h1 class="subtitle">
      Sponsors
      </h1>
      </div>
    </div>
    <div class="content">
      <div class="card">
      <h1 class="subtitle">
      SplashHacks Team
      </h1>
      </div>
    </div>
    <div class="bottomNavBar">
      <div class="card">
      <h1 class="subtitle">
      SplashHacks Team
      </h1>
      </div>
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

.bottomNavBar {
  background-color:#3fb1ea;
  overflow:hidden;
  position:relative;
  bottom:0%;
  width:100%;
}

.infoBox {
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  justify-content:center;
}

#infoImg {
  height:35vh;
  vertical-align:-15%;
  border-radius:50%;

}

#infoDetails {
  text-align:left;
  justify-content:center;


}

#smallImg {
  height:8vh;
  vertical-align:-15%;
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
