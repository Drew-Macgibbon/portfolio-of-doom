<template>
  <div class="flex flex-col-reverse lg:flex-row w-full justify-around items-center lg:justify-around overflow-hidden">
    <!-- left side -->
    <div class="mt-8 flex flex-col justify-center text-center lg:text-left w-1/2">
      <div
        class="flex flex-col justify-center  lg:justify-left text-4xl main-heading lg:text-5xl xl:text-7xl text-gray-800 tracking-1px"
      >
        <h2 class="mt-2 lg:mt-2">
          Presenting...
        </h2>
        <h2 class="mt-2 lg:mt-2 text-yellow-400">
          Meta-portfolio
        </h2>
        <h2 class="mt-2 lg:mt-2">
          Portfolio-ception
        </h2>
      </div>
      <div
        class="my-8 flex flex-col justify-center items-center gap-6 relative
          lg:items-left
          xl:flex-row xl:p-6
        "
      >
        <div class="w-full lg:w-3/4 justify-items-stretch flex flex-col">
          <h3 class="text-lg lg:text-2xl tracking-wide text-gray-700">
            For the next 48 hours (working hours) I will complete as much work as possible documenting the process on
            this
            website and my Github.
          </h3>
          <p class="lg:max-w-[80%] text-sm mt-4">
            Thanks Nicole for the name idea (meta-portfolio) and for putting up with my delays 😊
          </p>
        </div>
        <a
          href="https://github.com/Drew-Macgibbon"
          class="w-[50%] h-full mt-10 lg:mt-0 lg:w-[30%] max-w-[280px] lg:max-w-[400px] lg:h-auto aspect-auto right-0 y-6 p-4 flex justify-center items-center relative bg-[#ffffff] rounded-full shadow-lg"
        >
          <AppLottie
            :src="'https://lottie.host/7ed66755-ef23-4d41-8f01-6ccf8e7e4572/CHYE6gVPVA.json'"
            height="70%"
          />
        </a>
      </div>
    </div>
    <!--  Right Side -->
    <div class="w-1/2">
      <div class="text-5xl hello xl:text-5xl mt-8 text-gray-800 tracking-1px mx-auto">
        <h2 class="mb-12 lg:mb-6 xl:mb-8 text-center">
          The creator (non-biblical)
        </h2>
      </div>
      <div class="w-full mt-8 lg:mt-0 relative flex flex-row justify-center items-center">
        <!-- <AppLottie
          :src="'https://assets2.lottiefiles.com/packages/lf20_yeyxce62.json'"
          class="-rotate-90 w-[40%] mr-[-50px] h-full hidden lg:block"
        /> -->
        <div class="img-bg flex justify-center items-center rounded-2xl relative z-20 overflow-hidden">
          <img
            src="/drew-img.png"
            alt="Drew MacGibbon"
            class="min-h-[439px] min-w-full object-cover -mb-[35px] px-8 pt-8"
          >
        </div>
        <!-- <AppLottie
          :src="'https://assets2.lottiefiles.com/packages/lf20_yeyxce62.json'"
          class="rotate-90 w-[40%] h-full ml-[-50px] hidden lg:block"
        /> -->
      </div>
      <div class="text-3xl hello xl:text-5xl text-gray-800 tracking-1px mx-auto">
        <h2 class="my-12 lg:mt-6 xl:mt-8 text-center">
          👋, I'm Mac
        </h2>
      </div>
      <div class="w-full max-w-[420px] relative bg-[#ebe9e5] rounded-md p-6 shadow-lg mt-6 mx-auto">
        <div class="absolute right-0 top-0 -mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="50"
            height="50"
          >
            <path
              fill="none"
              d="M0 0h24v24H0z"
            />
            <path
              fill="#fdc76f"
              d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"
            />
          </svg>
        </div>
        <div class="flex items-center">
          <h2 class="text-base font-bold text-black">
            {{ quote.author }}
          </h2>
        </div>
        <p class="text-base f-m-m mt-2 text-black">
          {{ quote.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

const quote = await $fetch('https://api.quotable.io/random')

</script>

<style>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
@import url('https://fonts.googleapis.com/css2?family=Rubik+Distressed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap');

:root {
  --col1: #fdc76f;
  --col2: #ac7b09;
  --col3: rgba(254, 2, 2, 0);
  --col4: rgb(135, 15, 15);

}

.hello {
  font-family: 'Nanum Brush Script', cursive;
}

.img-bg {
  background:
    radial-gradient(circle farthest-side at 0% 50%, var(--col1) 23.5%, var(--col3) 0)21px 30px,
    radial-gradient(circle farthest-side at 0% 50%, var(--col2) 24%, var(--col3) 0)19px 30px,
    linear-gradient(var(--col1) 14%, var(--col3) 0, var(--col3) 85%, var(--col1) 0)0 0,
    linear-gradient(150deg, var(--col1) 24%, var(--col2) 0, var(--col2) 26%, var(--col3) 0, var(--col3) 74%, var(--col2) 0, var(--col2) 76%, var(--col1) 0)0 0,
    linear-gradient(30deg, var(--col1) 24%, var(--col2) 0, var(--col2) 26%, var(--col3) 0, var(--col3) 74%, var(--col2) 0, var(--col2) 76%, var(--col1) 0)0 0,
    linear-gradient(90deg, var(--col4) 2%, var(--col1) 0, var(--col1) 98%, var(--col2) 0%)0 0 var(--col1);
  background-size: 40px 60px;
}

.main-heading {
  font-family: 'Rubik Distressed', cursive;
}

.top-100 {
  animation: slideDown 0.5s ease-in-out;
}

/* Slider css below */
.slider {
  width: 100%;
  height: 600px;
  padding-top: 14px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.slide-ana {
  height: 100%;
}

@keyframes slideDown {
  0% {
    top: -50%;
  }

  100% {
    top: 0;
  }
}

* {
  outline: none !important;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
</style>
