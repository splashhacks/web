<template>
  <div>
    <TeamCards image="~@/assets/henrymarks.jpeg" />
    <TeamCards image="~@/assets/ethan.jpeg" />
    <TeamCards image="~@/assets/jacob.jpeg" />
    <TeamCards image="~@/assets/jessica.jpeg" />
    <TeamCards image="~@/assets/jason.jpeg" />
    <TeamCards image="~@/assets/swerd.jpeg" />
  </div>
</template>
<style scoped>
</style>
<script>
import TeamCards from "./TeamCards.vue";
export default {
  components: {
    TeamCards,
  },
};
</script>