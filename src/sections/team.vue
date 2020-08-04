<template>
  <div>
    <TeamCard image="./profileImages/henrymarks.jpeg" name="Henry Marks" position="Developer and Experience Manager"/>
    <TeamCard image="./profileImages/ethan.jpeg" name="Ethan Hopkins" position="Director"/>
    <TeamCard image="./profileImages/jacob.jpeg" name="Jacob Zwang" position="Marketing Manager"/>
    <TeamCard image="./profileImages/jason.jpeg" name="Jason Telanoff" position="Hacker Experience"/>
    <TeamCard image="./profileImages/jessica.jpeg" name="Jessica Golden" position="Lead Task Manager"/>
    <TeamCard image="./profileImages/swerd.jpeg" name="Ben Swerdlow" position="Founder and Technical Coordinator"/>
    
  </div>
</template>
<style scoped>
div {
  text-align: center;
  max-width: 1200px;
  float: center;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
}
@media (min-width: 600px) {
  div { grid-template-columns: repeat(2,1fr); }
}
@media (min-width: 900px) {
  div { grid-template-columns: repeat(3,1fr); }
}
</style>
<script>
import TeamCard from "@/components/TeamCard.vue";
export default {
  components: {
    TeamCard,
  },
};
</script>
