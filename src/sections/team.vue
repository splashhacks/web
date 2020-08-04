<template>
  <div>
    <TeamCards image="./profileImages/henrymarks.jpeg"
      >dfmkdmfkdmkfmkdmkfmdkmfkdmkfmdkmfkdmfk</TeamCards
    >
    <TeamCards image="./profileImages/ethan.jpeg"
      >dfmkdmfkdmkfmkdmkfmdkmfkdmkfmdkmfkdmfk</TeamCards
    >
    <TeamCards image="./profileImages/jacob.jpeg"
      >dfmkdmfkdmkfmkdmkfmdkmfkdmkfmdkmfkdmfk</TeamCards
    >
    <TeamCards image="./profileImages/jason.jpeg"
      >dfmkdmfkdmkfmkdmkfmdkmfkdmkfmdkmfkdmfk</TeamCards
    >
    <TeamCards image="./profileImages/jessica.jpeg"
      >dfmkdmfkdmkfmkdmkfmdkmfkdmkfmdkmfkdmfk</TeamCards
    >
    <TeamCards image="./profileImages/swerd.jpeg"
      >dfmkdmfkdmkfmkdmkfmdkmfkdmkfmdkmfkdmfk</TeamCards
    >
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
import TeamCards from "@/components/TeamCards.vue";
export default {
  components: {
    TeamCards,
  },
};
</script>
