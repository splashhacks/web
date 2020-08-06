<template>
  <div class="orangeBorder">
    <slot></slot>
  </div>
</template>

<style scoped>
.orangeBorder {
  padding: 10px;
  background-color: orange;
  border-radius: 20px;
  display: flex;
  display: grid;
}
</style>