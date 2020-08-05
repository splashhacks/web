<template>
  <a href="https://forms.gle/HpvPySwZnRnmfyGB9" class="defaultLink" :id="type">Register now</a>
</template>
<style scoped>


.defaultLink {
  border: 2px solid #003c7e;
  color: #003c7e;
  text-transform: uppercase;
  font-weight: 900;
  text-decoration: none;
  padding: 10px;
  border-radius: 16px;
  transition: 250ms ease; 
}

.defaultLink:hover {
  background-color: #003c7e;
  color: white;
}
#signUp {
  font-size: 16px;
}

#signUpBig {
  font-size:40px;
}

</style>

<script>
export default {
  props:["type"]
}
</script>