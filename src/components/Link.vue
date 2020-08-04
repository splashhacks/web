<template>
  <a :href="id" class="link">{{ name }}</a>
</template>
<style scoped>
.link {
  opacity: 100% !important;
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-top: 16px;

  padding-left: 8px;
}
</style>
<script>
export default {
  props: ["id", "name"],
};
</script>