<template>
  <a href="https://forms.gle/HpvPySwZnRnmfyGB9" class="defaultLink" :id="type">Register now</a>
</template>
<style scoped>
.defaultLink {
  border: 2px solid #003c7e;
  color: var(--splash-dark);
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  transition: 250ms ease;
  display: inline-flex;
  font-size: 16pt;
  align-items: center;
}

.defaultLink:hover {
  background-color: var(--splash-dark);
  color: var(--sky);
}
</style>

<script>
export default {
  props: ["type"],
};
</script>