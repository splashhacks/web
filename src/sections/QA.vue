<template>
  <Section name="faq">
      <FAQParts
        id="1"
        question="What are hackathons?"
        response="A ‘hackathon’ is a fast-paced programming event and competition where members of the community come together to work on projects that address real-world issues. Supplemented by workshops, mentors, and an awesome community, hackathons are great experiences for advancing technical knowledge and learning new skills. At the end of the timeframe, submissions are judged and prizes are awarded!"
      />
      <FAQParts
        id="2"
        question="Why SplashHacks?"
        response="At SplashHacks, we put an emphasis on building connections, regardless of the online aspect of the hackathon. Both new and returning developers are welcome because our goal is to allow anyone to ‘dive in’ to the community!"
      />
      <FAQParts
        id="3"
        question="Who can participate? How many people can be on my team?"
        response="Individuals enrolled in high school or University may participate. Teams may consist of 1-4 individuals."
      />
      <FAQParts
        id="4"
        question="Can I start my code early?"
        response="No. Starting your programming early (“pre-hacking”) is strictly forbidden at SplashHacks."
      />
      <FAQParts
        id="5"
        question="Do I need prior code experience?"
        response="Nope! SplashHacks is committed to introducing new developers to the world of code. During the event, many opportunities will be available for beginners, such as workshops, mentors, and discussion boards."
      />
      <FAQParts
        id="6"
        question="What if I have no friends?"
        response="Don’t worry! We have a Discord community where you can meet new people!"
      />
       <FAQParts
        id="7"
        question="How much does the event cost?"
        response="SplashHacks is completely free to enter. The only cost to participate is sleep!"
      />
       <FAQParts
        id="8"
        question="Why does water never laugh at jokes?"
        response="It isn’t a fan of dry humor."
      />
  </Section>
</template>

<script>
import Section from "@/components/Section.vue";
import FAQParts from "@/components/FAQParts.vue";
export default {
  components: {
    Section,
    FAQParts,
  },
};
</script>

<style scoped>
table {
  font-size: 20px;
  border-spacing: 0px;
  background-color: white;
  text-align: left;
}
tr {
  vertical-align: top;
  border-bottom: 5px;
  border: solid;
}
tr :first-child {
  font-weight: 500;
  background-color: #94cdea;
  width: 30%;
}
td {
  padding: 20px;
}
</style>