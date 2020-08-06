<template>
  <div class="oneThree">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style>
.oneThree {
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: white;
  border-radius: 10px;
  text-align: left;
}
</style>