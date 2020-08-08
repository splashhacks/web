<template>
  <Section name="team">
    <h2 style="color:var(--sky)">Core Team</h2>
   <!-- <h2 style="color:var(--sky)">Judges</h2> -->
    <div class="teamCards">
      <TeamCard
        image="./profileImages/swerd.jpeg"
        name="Ben Swerdlow"
        position="Founder and Technical Coordinator"
        instagram="https://www.instagram.com/ben_swerdlow/"
        github="https://github.com/theswerd"
        linkedin="https://www.linkedin.com/in/benswerdlow/"
      />
      <TeamCard
        image="./profileImages/jacob.jpeg"
        name="Jacob Zwang"
        position="Marketing Manager"
        instagram="https://www.instagram.com/theshortjacob/"
        github="https://github.com/JacobZwang"
        linkedin="https://www.linkedin.com/in/jacobzwang/"
      />
      <TeamCard
        image="./profileImages/ethan.jpeg"
        name="Ethan Hopkins"
        position="Executive Director"
        instagram="https://www.instagram.com/ethanhopkins___/"
        github="https://github.com/ethanh256"
        linkedin="https://www.linkedin.com/in/ethan-hopkins/"
      />
    </div>
    <div class="teamCards">
      <TeamCard
        image="./profileImages/jessica.jpeg"
        name="Jessica Golden"
        position="Lead Task Manager"
        instagram="https://www.instagram.com/jessica_pixel4/"
        github="https://github.com/jessicagolden412"
        linkedin="https://www.linkedin.com/in/jessica-golden-441153187/"
      />
      <TeamCard
        image="./profileImages/henrymarks.jpeg"
        name="Henry Marks"
        position="Developer and Experience Manager"
        instagram="https://www.instagram.com/henry_marks_/"
        github="https://github.com/Henrymarks1"
        linkedin="https://www.linkedin.com/in/henryesmarks/"
      />
      <TeamCard
        image="./profileImages/jason.jpeg"
        name="Jason Telanoff"
        position="Hacker Experience"
        instagram="https://www.instagram.com/json_t/"
        github="https://github.com/jasonTelanoff"
        linkedin="https://www.linkedin.com/in/jason-telanoff-5a3767198/"
      />
    </div>
    <div></div>
    <h2 style="color:var(--sky)">Ambassadors</h2>
    <div class="ambassadorCards">
      <Ambassador
       image="./profileImages/jason.jpeg"
        name="Jason Telanoff"
        instagram="https://www.instagram.com/json_t/"
        github="https://github.com/jasonTelanoff"
        linkedin="https://www.linkedin.com/in/jason-telanoff-5a3767198/"
      />
      <Ambassador
       image="./profileImages/jason.jpeg"
        name="Jason Telanoff"
        instagram="https://www.instagram.com/json_t/"
        github="https://github.com/jasonTelanoff"
        linkedin="https://www.linkedin.com/in/jason-telanoff-5a3767198/"
      />
      <Ambassador
       image="./profileImages/jason.jpeg"
        name="Jason Telanoff"
        instagram="https://www.instagram.com/json_t/"
        github="https://github.com/jasonTelanoff"
        linkedin="https://www.linkedin.com/in/jason-telanoff-5a3767198/"
      />
      <Ambassador
       image="./profileImages/jason.jpeg"
        name="Jason Telanoff"
        instagram="https://www.instagram.com/json_t/"
        github="https://github.com/jasonTelanoff"
        linkedin="https://www.linkedin.com/in/jason-telanoff-5a3767198/"
      />
      <Ambassador
       image="./profileImages/jason.jpeg"
        name="Jason Telanoff"
        instagram="https://www.instagram.com/json_t/"
        github="https://github.com/jasonTelanoff"
        linkedin="https://www.linkedin.com/in/jason-telanoff-5a3767198/"
      />
      <Ambassador
       image="./profileImages/jason.jpeg"
        name="Jason Telanoff"
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
import Ambassador from "@/components/Ambassador.vue";
export default {
  components: {
    TeamCard,
    Section,
    Ambassador,
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
}
.ambassadorCards {
  text-align: center;
  display: grid;
  text-align: left;
  background-color: var(--sky);
  border-radius: 20px;
  padding: 20px;
  margin: 20px 0px 20px 0px;
  grid-template-columns: 20px 40px calc(100% - 140px);

}

@media (min-width: 0px) {
  .teamCards {
    grid-template-columns: repeat(1, 1fr);
  }
  .ambassadorCards{
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .teamCards {
    grid-template-columns: repeat(3, 1fr);
  }
  .ambassadorCards{
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
