<template>
  <div>
    <Header />
    <div class="content">
      <About />
      <Tracks />
      <Prizes />
      <QA />
      <Team />
      <!-- <Ambassadors /> -->
      <div>
        <RegisterButton style="color:white; border-color: white" />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/sections/Header.vue";
import Team from "@/sections/Team.vue";
import QA from "@/sections/QA.vue";
import RegisterButton from "@/components/RegisterButton.vue";
import About from "@/sections/About.vue";
import Prizes from "@/sections/Prizes.vue";
import Tracks from "@/sections/Tracks.vue";
export default {
  components: {
    Header,
    QA,
    Team,
    RegisterButton,
    About,
    Prizes,
    Tracks,
  },
};
</script>

<style scoped>
.register {
  text-decoration: none;
  font-weight: 900;
}
#centerTable {
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
.content {
  padding: 75px;
}
@media screen and (max-width: 720px) {
  .content {
    padding: 18px;
  }
}

.stripeLeft {
  font-weight: 800;
}
</style>
