<template>
  <a :href="id" class="link">{{ name }}</a>
</template>
<style scoped>
.link {
  text-decoration: none;
  position:relative;
  text-transform: uppercase;
  color: var(--sky);
  font-size: 20px;
  margin-top: 8px;

  padding-left: 8px;
}

.link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 10px;
  left: 0;
  transform: scaleX(0);
  background-color:var(--sky);
  visibility: hidden;
  transition: all 0.2s ease-in-out 0s;
}

.link:hover::before {
  visibility: visible;
  transform: scaleX(.6);
}

</style>
<script>
export default {
  props: ["id", "name"],
};
</script>