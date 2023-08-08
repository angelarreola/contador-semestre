<script setup>
  import { ref } from 'vue'
  // Set the date we're counting down to
  let countDownDate = new Date("Dec 15, 2023 19:00:00").getTime();
  const countDown = ref('');

  // Update the count down every 1 second
  let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";
    countDown.value =  days + "d " + hours + "h " + minutes + "m " + seconds + "s "

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      countDown.value = '¡A MANDAR A CHINGAR SU MADRE EL SEMESTRE!'
    }
  }, 1000);

</script>

<template>
  <div class="h-screen blue bg-the-egg bg-no-repeat bg-cover grid place-items-center font-hanken">
      <div class="text-center w-11/12 md:w-1/2 h-1/2 rounded-2xl flex flex-col bg-gradient-to-br from-blue-700/50 to-black/70 backdrop-blur-md border-gray-500/50 border justify-center gap-6 px-5">
        <h1 class="text-white text-2xl md:text-3xl font-bold">Tiempo que falta para mandar a chingar a su madre al semestre:</h1>
        <p class="text-white text-4xl md:text-5xl font-bold"> {{ countDown }} </p>
        <p class="text-7xl">🥚</p>
      </div>
  </div>
</template>
