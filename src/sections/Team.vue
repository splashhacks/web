<template>
  <Section name="team">
    <h1>SplashHacks Team</h1>
    <div class="teamCards">
      <TeamCard
        image="./profileImages/henrymarks.jpeg"
        name="Henry Marks"
        position="Developer and Experience Manager"
        instagram="https://www.instagram.com/henry_marks_/"
        github="https://github.com/Henrymarks1"
        linkedin="https://www.linkedin.com/in/henryesmarks/"
      />
      <TeamCard
        image="./profileImages/ethan.jpeg"
        name="Ethan Hopkins"
        position="Executive Director"
        instagram="https://www.instagram.com/ethanhopkins___/"
        github="https://github.com/ethanh256"
        linkedin="https://www.linkedin.com/in/ethan-hopkins/"
      />
      <TeamCard
        image="./profileImages/swerd.jpeg"
        name="Ben Swerdlow"
        position="Founder and Technical Coordinator"
        instagram="https://www.instagram.com/ben_swerdlow/"
        github="https://github.com/theswerd"
        linkedin="https://www.linkedin.com/in/benswerdlow/"
      />
      <TeamCard
        image="./profileImages/jessica.jpeg"
        name="Jessica Golden"
        position="Lead Task Manager"
        instagram="https://www.instagram.com/jessica_pixel4/"
        github="https://github.com/jessicagolden412"
        linkedin="https://www.linkedin.com/in/jessica-golden-441153187/"
      />
      <TeamCard
        image="./profileImages/jason.jpeg"
        name="Jason Telanoff"
        position="Hacker Experience"
        instagram="https://www.instagram.com/json_t/"
        github="https://github.com/jasonTelanoff"
        linkedin="https://www.linkedin.com/in/jason-telanoff-5a3767198/"
      />
      <TeamCard
        image="./profileImages/jacob.jpeg"
        name="Jacob Zwang"
        position="Marketing Manager"
        instagram="https://www.instagram.com/theshortjacob/"
        github="https://github.com/JacobZwang"
        linkedin="https://www.linkedin.com/in/jacobzwang/"
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
  max-width: 1200px;
  float: center;
  width: 100%;
  display: grid;
  grid-gap: 1rem;
}
@media (min-width: 600px) {
  div {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 900px) {
  div {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
