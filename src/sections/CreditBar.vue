<template>
  <Section name="CreditBar">
    <div class="creditDiv">
      <BottomNav
        linkedin="https://www.linkedin.com/company/66724424/admin/"
        instagram="https://www.instagram.com/splashhacks/"
      />
    </div>
  </Section>
</template>

<script>
import BottomNav from "@/components/BottomNav.vue";
export default {
  components: {
    BottomNav
  }
};
</script>

<style scoped>
.creditDiv {
  position: absolute;
  padding-left: 21vw;
}

.section {
  margin: 0px 0px 100px 0px;
}
</style>