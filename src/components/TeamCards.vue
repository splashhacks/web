<template>
  <div>
    <a :href="id" class="link">
    {{ image }}
  </a>
   <img src= image id="smallImg" />
  </div>
</template>
<style scoped>

</style>
<script>
export default {
  props: ["id", "Path"],
};
</script>