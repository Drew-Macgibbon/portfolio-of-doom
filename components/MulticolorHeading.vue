<template>
  <div class="w-full py-40 flex justify-center">
    <h1 class="multicolor text-[10vw] leading-[10vw] text-center sm:text-[7vw]">
      Imagine what can happen beyond 48 hours...
    </h1>
  </div>
</template>

<script setup lang="ts">

</script>

<style>

:root {
  --color-1: #261702;
  --color-2: #3e3622;
  --color-3: #F3CE6D;
  --color-4: #e89d11;
  --color-5: #f95f00;
}

.multicolor {
  font-family: "Exo", sans-serif;
  font-weight: 900;
  margin: auto;
  text-transform: uppercase;
  background: linear-gradient(219deg,
      var(--color-1) 19%,
      transparent 19%, transparent 20%,
      var(--color-2) 20%, var(--color-2) 39%,
      transparent 39%, transparent 40%,
      var(--color-3) 40%, var(--color-3) 59%,
      transparent 59%, transparent 60%,
      var(--color-4) 60%, var(--color-4) 79%,
      transparent 79%, transparent 80%,
      var(--color-5) 80%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

</style>
