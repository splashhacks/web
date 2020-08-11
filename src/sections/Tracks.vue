<template>
  <Section name="tracks">
    <h2>Tracks</h2>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr);">
      <div>
        <img src="~@/assets/quarantinehack.png" style="width: 100%" />
        <h3>Quarantine Hack</h3>
        <p2>Build a hack that makes the best of a difficult situation. We want to see unique projects that improve life in quarantine.</p2>
      </div>
      <div>
        <img src="~@/assets/splashhack.png" style="width: 100%" />
        <h3>Splash Hack</h3>
        <p2>Build a hack with significant potential impact. We want to see the next breakthrough idea with sophisticated code.</p2>
      </div>
      <div>
        <img src="~@/assets/localhack.png" style="width: 100%" />
        <h3>Local Hack</h3>
        <p2>Build a hack that uniquely supports your local community. We want to see effective code with a clear path for real implementation.</p2>
      </div>
    </div>
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