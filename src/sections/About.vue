<template>
  <div class="stripeContent" id="About">
    <img
      src="~@/assets/helping.jpg"
      class="stripeColumn"
      style="height: 100%; width: 100%; border-radius: 10px 0px 0px 10px; object-fit: cover;"
    />
    <div
      class="stripeColumn"
      style="border-radius: 0px 10px 10px 0px;
  background-color: white; padding: 20px"
    >
      <h1>WHAT MAKES US DIFFERENT</h1>
      <p>While most online Hackathons are great experiences for learning, testing out new ideas, and advancing technical skills, they tend to focus on individual teams more than the Hacker Community as a whole. At SplashHacks, we aim to provide a stimulating and deeply interconnected event for new and advanced programmers, graphic designers, and technical visionaries alike. During our event, high school and college students will have a 36-hour period to bring their ideas to life, filled with events for peer-to-peer connection and collaboration.</p>
    </div>
  </div>
</template>

<style scoped>
.stripeContent {
  padding: 10px;
  background-color: orange;
  border-radius: 20px;
  display: flex;
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.stripeColumn {
  text-align: left;
  grid-row: 1;
}
</style>