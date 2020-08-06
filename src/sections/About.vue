      <template>
  <Section name="about">
    <OneThree>
      <template v-slot:left>
        <img
          src="~@/assets/helping.jpg"
          class="stripeColumn"
          style="height: 100%; width: 100%; border-radius: 10px 0px 0px 10px; object-fit: cover;"
        />
      </template>
      <template v-slot:right>
        <h1>What makes us diffrent</h1>
        <p1>While most online Hackathons are great experiences for learning, testing out new ideas, and advancing technical skills, they tend to focus on individual teams more than the Hacker Community as a whole. At SplashHacks, we aim to provide a stimulating and deeply interconnected event for new and advanced programmers, graphic designers, and technical visionaries alike. During our event, high school and college students will have a 36-hour period to bring their ideas to life, filled with events for peer-to-peer connection and collaboration.</p1>
      </template>
    </OneThree>
  </Section>
</template>

<script>
import Section from "@/components/Section.vue";
import OneThree from "@/components/OneThree.vue";
export default {
  components: {
    Section,
    OneThree,
  },
};
</script>