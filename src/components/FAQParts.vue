<template>
 <div>
    <button class="accordionSection" @click="activitySwitch()">{{question}}</button>
    <div class="slidePanel" v-bind:class="panelObject">
        <p>{{response}}</p>
    </div>
 </div>


</template>
<style scoped>
.accordionSection {

}

.accordionSection:after {

}
.bruh {
    color:green;
}
.isInactive {
max-height:null;
}

.isActive {
max-height:10px;
}

</style>

<script>


</script>
<script>
export default {
data: {
    panelObject: { 
        isInactive: true,
        isActive: false
    }
},
computed: {
    activitySwitch () {
        if (isInactive = true) {
            panelObject.isInactive = false;
            panelObject.isActive = true;
        } else {
            panelObject.isInactive = true;
            panelObject.isActive = false;
        }
    }
},
  props: ["question", "response"],
  methods: {
    showResponse() {
        this.className = "bruh"
    /* this.classList.toggle("active")
    var panel = this.nextElementSibling;
    if (panel.className.includes("Shown")){
    panel.className = panel.ClassName.replace("Shown", "");
    } else {
    panel.className += "Shown" */
}
  }
};

</script>