<template>
  <div>
    <Header />
    <div class="content" id="About">
      <div class="card">
        <h1 class="subtitle">
          About <img src="~@/assets/logo.png" id="smallImg" />
        </h1>
      </div>
      <div class="infoBox">
        <!-- Placeholder image (probably doesn't need an image anyway) -->
        <div><img src="~@/assets/helping.jpg" id="infoImg" /></div>
        <div id="infoDetails">
          <pre>
        While most online Hackathons are great experiences 
        for learning, testing out new ideas, and advancing 
        technical skills, they tend to focus on individual 
        teams more than the Hacker Community as a whole. 
        At SplashHacks, we aim to provide a stimulating and 
        deeply interconnected event for new and advanced 
        programmers, graphic designers, and technical visionaries 
        alike. During our event, high school and college students 
        will have a 36-hour period to bring their ideas to life, 
        filled with events for peer-to-peer connection and collaboration. </pre
          >
        </div>
      </div>
    </div>
    <div class="content" id="Prizes">
      <div class="card">
        <h1 class="subtitle">
          Prizes
        </h1>
        <img src="~@/assets/prizes.png" height="300px"/>
      </div>
    </div>
    <div class="content" id="FAQ">
      <div class="card">
        <h1 class="subtitle">
          Frequently Asked Questions
        </h1>
        <table id="centerTable">
          <tr>
            <td>What are hackathons?</td>
            <td>
              A ‘hackathon’ is a fast-paced programming event and competition
              where members of the community come together to work on projects
              that address real-world issues. Supplemented by workshops,
              mentors, and an awesome community, hackathons are great
              experiences for advancing technical knowledge and learning new
              skills. At the end of the timeframe, submissions are judged and
              prizes are awarded!
            </td>
          </tr>
          <tr>
            <td id="segment">Why SplashHacks?</td>
            <td>
              At SplashHacks, we emphasize peer-to-peer connection and
              collaboration. [Add more]
            </td>
          </tr>
          <tr>
            <td>Who can participate? How many people can be on my team?</td>
            <td>
              Individuals enrolled in high school or University may participate.
              Teams may consist of 1-4 individuals.
            </td>
          </tr>
          <tr>
            <td>Can I start my code early?</td>
            <td>
              No. Starting your programming early (“pre-hacking”) is strictly
              forbidden at SplashHacks.
            </td>
          </tr>
          <tr>
            <td>Do I need prior code experience?</td>
            <td>
              Nope! SplashHacks is committed to introducing new developers to
              the world of code. During the event, many opportunities will be
              available for beginners, such as workshops, mentors, and
              discussion boards.
            </td>
          </tr>
          <tr>
            <td>What if I have no friends?</td>
            <td>
              Don’t worry! We have a Discord community where you can meet new
              people!
            </td>
          </tr>
          <tr>
            <td>How much does the event cost?</td>
            <td>
              SplashHacks is completely free to enter. The only cost to
              participate is sleep!
            </td>
          </tr>
          <tr>
            <td>Why does water never laugh at jokes?</td>
            <td>It isn’t a fan of dry humor.</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="content">
      <div class="card">
        <!-- <h1 class="subtitle">
      Sponsors
      </h1> -->
      </div>
    </div>
    <div class="content" id="Team">
      <div class="card">
        <h1 class="subtitle">
          SplashHacks Team
        </h1>
      </div>
    </div>
    <div class="bottomNavBar">
      <div class="card">
        <h1 class="subtitle">
          Ready? Register now!
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style scoped>
#segment {
  width: 5vw;
}
#centerTable {
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

td,
th {
  padding: 15px;
}

.bottomNavBar {
  background-color: #3fb1ea;
  overflow: hidden;
  position: relative;
  bottom: 0%;
  width: 100%;
}

.infoBox {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

#infoImg {
  height: 35vh;
  vertical-align: -15%;
  border-radius: 50%;
}

#infoDetails {
  text-align: left;
  justify-content: center;
  font-size: 18px;
}

#smallImg {
  height: 8vh;
  vertical-align: -15%;
}

.content {
  padding-top: 80px;
}
.subtitle {
  color: #3fb1ea;
  font-size: 50px;
  margin-top: 1vh;
}
.card {
  padding: 20pt;
  background-color: white;
}
</style>
