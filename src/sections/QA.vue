<template>
  <Section>
    <h1>Frequently Asked Questions</h1>
    <table id="FAQ">
      <tr>
        <td>What are hackathons?</td>
        <td>
          A ‘hackathon’ is a fast-paced programming event and competition
          where members of the community come together to work on projects
          that address real-world issues. Supplemented by workshops,
          mentors, and an awesome community, hackathons are great
          experiences for advancing technical knowledge and learning new
          skills. At the end of the timeframe, submissions are judged and
          prizes are awarded!
        </td>
      </tr>
      <tr>
        <td>Why SplashHacks?</td>
        <td>
          At SplashHacks, we put an emphasis on building connections,
          regardless of the online aspect of the hackathon. Both new
          and returning developers are welcome because our goal is to
          allow anyone to ‘dive in’ to the community!
        </td>
      </tr>
      <tr>
        <td>Who can participate? How many people can be on my team?</td>
        <td>
          Individuals enrolled in high school or University may participate.
          Teams may consist of 1-4 individuals.
        </td>
      </tr>
      <tr>
        <td>Can I start my code early?</td>
        <td>
          No. Starting your programming early (“pre-hacking”) is strictly
          forbidden at SplashHacks.
        </td>
      </tr>
      <tr>
        <td>Do I need prior code experience?</td>
        <td>
          Nope! SplashHacks is committed to introducing new developers to
          the world of code. During the event, many opportunities will be
          available for beginners, such as workshops, mentors, and
          discussion boards.
        </td>
      </tr>
      <tr>
        <td>What if I have no friends?</td>
        <td>
          Don’t worry! We have a Discord community where you can meet new
          people!
        </td>
      </tr>
      <tr>
        <td>How much does the event cost?</td>
        <td>
          SplashHacks is completely free to enter. The only cost to
          participate is sleep!
        </td>
      </tr>
      <tr>
        <td>Why does water never laugh at jokes?</td>
        <td>It isn’t a fan of dry humor.</td>
      </tr>
    </table>
  </Section>
</template>

<script>
import Section from "@/components/Section.vue";
export default {
  components: {
    Section,
  },
};
</script>

<style scoped>
table {
  font-size: 20px;
  border-spacing: 0px;
  background-color: white;
  margin: 20pt;
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