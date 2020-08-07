<template>
  <div class="downArrow">
    <a href="#topHeader">
      <img src="@/assets/anchor.svg" />
    </a>
  </div>
</template>

<style>
.downArrow {
  position: absolute;
  left: 50%;
  bottom: 50px;
  height: 30px;
  width: 30px;
  transform: translateX(-50%) scale(2);
  animation: MoveUpDown 1s linear infinite;
  transition: 200ms;
}
:hover.downArrow {
  transform: translateX(-50%) scale(3);
}

@keyframes MoveUpDown {
  0%,
  100% {
    bottom: 50px;
  }
  50% {
    bottom: 80px;
  }
}
</style>