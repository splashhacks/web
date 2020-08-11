<template>
  <Section name="team">
    <h2>SplashHacks Team</h2>
    <div class="teamCards">
      <TeamCard
        image="./profileImages/swerd.jpeg"
        name="Ben Swerdlow"
        position="I assembled the team and created the Ambassador Program. I helped draft our core documents. I also built many of the website’s most important features."
        instagram="https://www.instagram.com/ben_swerdlow/"
        github="https://github.com/theswerd"
        linkedin="https://www.linkedin.com/in/benswerdlow/"
      />
      <TeamCard
        image="./profileImages/jacob.jpeg"
        name="Jacob Zwang"
        position="I led design and development of the website in Vue, teaching the team core concepts along the way. "
        instagram="https://www.instagram.com/theshortjacob/"
        github="https://github.com/JacobZwang"
        linkedin="https://www.linkedin.com/in/jacobzwang/"
      />
      <TeamCard
        image="./profileImages/ethan.jpeg"
        name="Ethan Hopkins"
        position="I led team management and event planning. I built, edited, and optimized components of the website."
        instagram="https://www.instagram.com/ethanhopkins___/"
        github="https://github.com/ethanh256"
        linkedin="https://www.linkedin.com/in/ethan-hopkins/"
      />
    </div>
    <div class="teamCards">
      <TeamCard
        image="./profileImages/jessica.jpeg"
        name="Jessica Golden"
        position="I prototyped design concepts and vectorized graphics for the website."
        instagram="https://www.instagram.com/jessica_pixel4/"
        github="https://github.com/jessicagolden412"
        linkedin="https://www.linkedin.com/in/jessica-golden-441153187/"
      />
      <TeamCard
        image="./profileImages/henrymarks.jpeg"
        name="Henry Marks"
        position="I built and designed key aspects of the website in Vue. I also assisted in sponsor outreach and planned hackathon activities to maximize the event experience. "
        instagram="https://www.instagram.com/henry_marks_/"
        github="https://github.com/Henrymarks1"
        linkedin="https://www.linkedin.com/in/henryesmarks/"
      />
      <TeamCard
        image="./profileImages/jason.jpeg"
        name="Jason Telanoff"
        position="I planned  and event activity planning."
        instagram="https://www.instagram.com/json_t/"
        github="https://github.com/jasonTelanoff"
        linkedin="https://www.linkedin.com/in/jason-telanoff-5a3767198/"
      />
    </div>
  </Section>
</template>

<script>
import Section from "@/components/Section.vue";
import TeamCard from "@/components/TeamCard.vue";

export default {
  components: {
    TeamCard,
    Section,
  },
};
</script>

<style scoped>
.teamCards {
  text-align: center;
  display: grid;
  text-align: left;
  background-color: var(--sky);
  border-radius: 20px;
  padding: 20px;
  margin: 20px 0px 20px 0px;
  z-index: 10;
}
@media (min-width: 600px) {
  .teamCards {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (min-width: 900px) {
  .teamCards {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>