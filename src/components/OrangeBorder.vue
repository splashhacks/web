<template>
  <div class="orangeBorder">
    <slot></slot>
  </div>
</template>

<style scoped>
.orangeBorder {
  padding: 20px;
  background-color: var(--focus);
  border-radius: 20px;
  display: flex;
  display: grid;
}
</style>