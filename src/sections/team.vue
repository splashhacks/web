<template>
  <div>
    <TeamCards image="./profileImages/henrymarks.jpeg" />
    <TeamCards image="./profileImages/ethan.jpeg" />
    <TeamCards image="./profileImages/jacob.jpeg" />
    <TeamCards image="./profileImages/jason.jpeg" />
    <TeamCards image="./profileImages/jessica.jpeg" />
    <TeamCards image="./profileImages/swerd.jpeg" />
  </div>
</template>
<style scoped>
</style>
<script>
import TeamCards from "@/components/TeamCards.vue";
export default {
  components: {
    TeamCards,
  },
};
</script>