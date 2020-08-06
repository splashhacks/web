<template>
  <a href="https://forms.gle/HpvPySwZnRnmfyGB9" class="defaultLink" :id="type">Register now</a>
</template>
<style scoped>
.defaultLink {
  border: 2px solid #003c7e;
  color: #003c7e;
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
  background-color: #003c7e;
  color: white;
}
</style>

<script>
export default {
  props: ["type"],
};
</script>