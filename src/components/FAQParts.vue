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
.isInactive {
color:green;
transition:1s;
height:0px;
text-overflow: clip;
}

.isActive {
color:red;
transition:1s;
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
    }
},
methods: {
    activitySwitch() {
        console.log("henry is epic")
        if (this.panelObject.isInactive == true) {
            console.log("Henry is a nice guy")
                this.panelObject.isInactive = false;
                this.panelObject.isActive = true; 
                }
        else {
                this.panelObject.isInactive = true;
                this.panelObject.isActive = false;
        } 
    }
},
  props: ["question", "response"],

};

</script>