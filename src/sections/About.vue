<template>
  <Section name="about">
    <img
      src="@/assets/subTop.svg"
      style="grid-row: 1; grid-column: 2; height: 150px; margin-left: 20%; transform: scaleX(-1)"
      class="sub"
    />
    <div style="display: flex">
      <OrangeBorder>
        <div class="inside">
          <h2>What Sets Us Apart</h2>
          <p1>
            While most online Hackathons are great experiences for learning,
            testing out new ideas, and advancing technical skills, they tend to
            focus on individual teams more than the Hacker Community as a whole.
            At SplashHacks, we aim to provide a stimulating and deeply
            interconnected event for new and advanced programmers, graphic
            designers, and technical visionaries alike. During our event, high
            school and college students will have a 36-hour period to bring their
            ideas to life, filled with events for peer-to-peer connection and
            collaboration.
          </p1>
        </div>
      </OrangeBorder>
      <img
        src="@/assets/subTail.svg"
        style="grid-row: 2; grid-column: 1; width: 300px; align-self: center; transform: scaleX(-1)"
        class="sub"
      />
    </div>
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
  background-color: var(--sand-light);
  border-radius: 10px;
  text-align: left;
  padding: 20px;
}

.sub {
  display: block;
}

@media screen and (max-width: 900px) {
  .sub {
    display: none;
  }
}
</style>
