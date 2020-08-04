<template>
  <div>
    <TeamCard image="./profileImages/henrymarks.jpeg" name="Henry Marks" text="Developer and Experience Manager"></TeamCard>
    <TeamCard image="./profileImages/ethan.jpeg" name="Ethan Hopkins" text="Director"></TeamCard>
    <TeamCard image="./profileImages/jacob.jpeg" name="Jacob Zwang" text="Marketing Manager"></TeamCard>
    <TeamCard image="./profileImages/jason.jpeg" name="Jason Telanoff" text="Hacker Experience"></TeamCard>
    <TeamCard image="./profileImages/jessica.jpeg" name="Jessica Golden" text="Lead Task Manager"></TeamCard>
    <TeamCard image="./profileImages/swerd.jpeg" name="Ben Swerdlow" text="Founder and Technical Coordinator"></TeamCard>
    
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
