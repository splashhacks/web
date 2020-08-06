<template>
  <div class="section" :id="name">
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
  padding: 10px;
  background-color: orange;
  border-radius: 20px;
  display: flex;
  display: grid;
}

.stripeColumn {
  text-align: left;
  grid-row: 1;
}
</style>