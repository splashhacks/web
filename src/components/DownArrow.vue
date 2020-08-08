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
  animation: MoveUpDown 1.3s linear infinite;
  transition: 100ms;
  animation-delay: 1s;
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