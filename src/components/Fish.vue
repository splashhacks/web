<template>
    <div class="bounce postition">
        <img src="@/assets/fish.svg" class="fish animateLTR" />
    </div>
</template>
<style scoped>
@-webkit-keyframes swim {
  0% {
    margin-left: -100%;
  }
  100% {
    margin-left: 100%;
  }
}

@keyframes swim {
  0% {
    margin-left: -100%;
  }
  100% {
    margin-left: 100%;
  }
}
.postition {
    bottom: 30px;
}
.fish {
  width: 40px;
  margin-left: -100%;
  position: absolute;
  
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
  animation-delay: 0.5s;
  -webkit-animation-delay: 0.5s;
}
.animateLTR {
  animation: swim 15s;
  -webkit-animation: swim 15s;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-animation-timing-function: linear;
}
@-moz-keyframes bounce {
  0%, 50%, 100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  25% {
    -moz-transform: translateY(-16px);
    transform: translateY(-16px);
  }
  75% {
    -moz-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@-webkit-keyframes bounce {
  0%, 50%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  25% {
    -webkit-transform: translateY(-16px);
    transform: translateY(-16px);
  }
  75% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@keyframes bounce {
  0%, 50%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  25% {
    -moz-transform: translateY(-16px);
    -ms-transform: translateY(-16px);
    -webkit-transform: translateY(-16px);
    transform: translateY(-16px);
  }
  75% {
    -moz-transform: translateY(-8px);
    -ms-transform: translateY(-8px);
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}

</style>
