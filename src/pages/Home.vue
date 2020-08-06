<template>
  <div>
    <Header />
    <div class="content">
      <About />
      <Prizes />
      <QA />
      <h1>SplashHacks Team</h1>
      <Team />
      <div>
        <RegisterButton style="color:white; border-color: white" />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/sections/Header.vue";
import Team from "@/sections/team.vue";
import QA from "@/sections/QA.vue";
import RegisterButton from "@/components/RegisterButton.vue";
import About from "@/sections/About.vue";
import Prizes from "@/sections/Prizes.vue";

export default {
  components: {
    Header,
    QA,
    Team,
    RegisterButton,
    About,
    Prizes,
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

.stripeLeft {
  font-weight: 800;
}
</style>
