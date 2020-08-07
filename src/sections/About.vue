<template>
  <Section name="about">
    <OrangeBorder>
      <div class="inside">
        <h1>What Sets Us Apart</h1>
        <p1
          >While most online Hackathons are great experiences for learning,
          testing out new ideas, and advancing technical skills, they tend to
          focus on individual teams more than the Hacker Community as a whole.
          At SplashHacks, we aim to provide a stimulating and deeply
          interconnected event for new and advanced programmers, graphic
          designers, and technical visionaries alike. During our event, high
          school and college students will have a 36-hour period to bring their
          ideas to life, filled with events for peer-to-peer connection and
          collaboration.</p1
        >
      </div>
    </OrangeBorder>
  </Section>
</template>

<script>
import Section from "@/components/Section.vue";
import OrangeBorder from "@/components/OrangeBorder.vue";
export default {
  components: {
    Section,
    OrangeBorder,
  },
};
</script>
<style scoped>
.inside {
  background-color: var(--sky);
}

</style>
