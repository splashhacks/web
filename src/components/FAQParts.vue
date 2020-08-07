<template>
  <div>
    <div class="accordionSection" v-bind:class="panelHeader" @click="activitySwitch()">
      <p1>{{question}}</p1>
    </div>
    <div class="slidePanel" v-bind:class="panelObject">
      <p1>{{response}}</p1>
    </div>
  </div>
</template>
<style scoped>
.accordionSection {
  background-color: none;
  cursor: pointer;
  padding: 2.5px;
  border-radius: 10px;
  transition: 400ms;
}

:hover.accordionSection {
  background-color: var(--focus);
  border-radius: 10px;
  padding: 2.5px;
  transition: 400ms;
}

/* .accordionSection:after {
  background-color: var(--sky);
  cursor: pointer;
} */
.isInactive {
  display: block;
  transition: 400ms ease-in-out;
  background-color: rgb(256, 256, 256, 0.5);
  max-height: 0;
  overflow: hidden;
  background-color: var(--sand-dark);
  border-radius: 0px 0px 10px 10px;
  /* margin-bottom: 20px; */
}

.isActive {
  display: block;
  transition: 1s;
  max-height: 500px;
  background-color: rgb(256, 256, 256, 0.5);
  overflow: hidden;
  transition: 400ms ease-in-out;
  background-color: var(--splash-mute);
  border-radius: 0px 0px 10px 10px;
  margin-bottom: 20px;
}

.isActiveHeader {
  display: block;
  background-color: var(--sand-light);
  border-radius: 10px 10px 0px 0px !important;
  transition: 400ms ease-in-out;
}
.isInactiveHeader {
  display: block;
  background-color: none;
  transition: 400ms ease-in-out;
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
        isActive: false,
      },
      panelHeader: {
        isInactiveHeader: true,
        isActiveHeader: false,
      },
    };
  },
  methods: {
    activitySwitch() {
      if (this.panelObject.isInactive == true) {
        this.panelObject.isInactive = false;
        this.panelObject.isActive = true;
        this.panelHeader.isInactiveHeader = false;
        this.panelHeader.isActiveHeader = true;
      } else {
        this.panelObject.isInactive = true;
        this.panelObject.isActive = false;
        this.panelHeader.isInactiveHeader = true;
        this.panelHeader.isActiveHeader = false;
      }
    },
  },
  props: ["question", "response"],
};
</script>