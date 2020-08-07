<template>
  <div>
    <button class="accordionSection" @click="activitySwitch()">{{question}}</button>
    <div class="slidePanel" v-bind:class="panelObject">
      <p2>{{response}}</p2>
    </div>
  </div>
</template>
<style scoped>
.accordionSection {
  background-color: rgb(256, 256, 256, 0.5);
}

.accordionSection:after {
  background-color: rgb(256, 256, 256, 0.5);
}
.isInactive {
  display: block;
  transition: 1000ms ease-out;
  background-color: rgb(256, 256, 256, 0.5);
  max-height: 0;
  overflow: hidden;
}

.isActive {
  display: block;
  transition: 1s;
  max-height: 500px;
  background-color: rgb(256, 256, 256, 0.5);
  overflow: hidden;
  transition: 1000ms ease-out;
}
</style>

<script>
</script>
<script>
export default {
  data() {
    return {
      panelObject: {
        isInactive: true,
        isActive: false
      }
    };
  },
  methods: {
    activitySwitch() {
      if (this.panelObject.isInactive == true) {
        this.panelObject.isInactive = false;
        this.panelObject.isActive = true;
      } else {
        this.panelObject.isInactive = true;
        this.panelObject.isActive = false;
      }
    }
  },
  props: ["question", "response"]
};
</script>