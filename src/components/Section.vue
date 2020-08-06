<template>
  <div :id="name" class="section">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name,
  },
};
</script>

<style scoped>
.section {
  margin: 0px 0px 100px 0px;
}
</style>