<template>
  <Section name="prizes">
    <img src="~@/assets/prizes.png" id="prizeIMG" />
  </Section>
</template>
<style scoped>
  #prizeIMG {
    width: 80%;
    max-height: 380px;
    object-fit: contain;
  }
</style>
<script>
import Section from "@/components/Section.vue";
export default {
  components: {
    Section,
  },
};
</script>
