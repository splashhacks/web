<template>
  <div>
   <img :src="image" id="smallImg" />
  </div>
</template>
<style scoped>

</style>
<script>
export default {
  props: ["id", "image"],
};
</script>