<template>
 <div>

     <button class="accordionSection" onclick="showResponse()">{{question}}</button>
    <div class="slidePanel">
        <p>{{response}}</p>
    </div>
 </div>


</template>
<style scoped>
.accordionSection {

}

.slidePanel {
max-height:null;
}

.slidePanelShown {
max-height:10px;
}

</style>

<script>

function showResponse() {
this.classList.toggle("active")
var panel = this.nextElementSibling;
if (panel.className.includes("Shown")){
    panel.className = panel.ClassName.replace("Shown", "");
} else {
    panel.className += "Shown"
}
}

</script>
<script>
export default {
  props: ["question", "response"],
};
</script>