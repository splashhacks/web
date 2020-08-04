<template>
  <div>
    <Header />
    <div class="content" id="About">
      <div class="stripeContent">
        <div class="stripeColumn">
          <img src="~@/assets/helping.jpg" style="border-radius: 50%; height: 400px" />
        </div>
        <div class="stripeColumn">
          <h1 >WHAT MAKES US DIFFERENT</h1>
          <p1>While most online Hackathons are great experiences for learning, testing out new ideas, and advancing technical skills, they tend to focus on individual teams more than the Hacker Community as a whole. At SplashHacks, we aim to provide a stimulating and deeply interconnected event for new and advanced programmers, graphic designers, and technical visionaries alike. During our event, high school and college students will have a 36-hour period to bring their ideas to life, filled with events for peer-to-peer connection and collaboration.</p1>
        </div>
      </div>
    </div>
    <div class="stripeContent">
      <div class="card">
        <img src="~@/assets/prizes.png" height="400px" />
      </div>
    </div>
    <div class="content" id="FAQ">
      <div class="card">
        <h1 class="subtitle">Frequently Asked Questions</h1>
        <QA />
      </div>
    </div>
    <div class="content">
      <div class="card"></div>
    </div>
    <div class="content" id="Team">
      <div class="card">
        <h1 class="subtitle">SplashHacks Team</h1>
        <Team />
      </div>
    </div>
    <div>
      <div class="card">
        <h1 class="subtitle">Ready? Register now!</h1>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/sections/Header.vue";
import Team from "@/sections/team.vue";
import QA from "@/sections/QA.vue";
export default {
  components: {
    Header,
    QA,
    Team,
  },
};
</script>

<style scoped>
#centerTable {
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
.content {
  padding-top: 75px;
}
.stripeContent {
  padding: 30px;
  display: flex;
  display: grid;
  grid-auto-columns: 1fr;
  margin: 30pt 100pt 30pt 100pt;
}

.stripeColumn {
  text-align: left;
  grid-row: 1;
  margin: auto;
}
.stripeLeft{
  font-weight: 800;
}
</style>
