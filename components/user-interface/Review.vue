<template>
  <div>
    <div
      ref="modal"
      class="
        py-12
        dark:bg-black
        bg-gray-700
        transition
        duration-150
        ease-in-out
        z-10
        absolute
        top-0
        right-0
        bottom-0
        left-0
        hidden
      "
    >
      <div
        role="alert"
        class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center"
      >
        <div
          class="
            relative
            md:w-96
            rounded
            shadow-lg
            px-6
            pt-4
            pb-6
            dark:bg-gray-800
            bg-white
          "
        >
          <div class="flex flex-col items-center justify-center">
            <p
              class="
                text-base
                md:text-lg
                font-bold
                leading-5
                dark:text-gray-100
                text-gray-800
              "
            >
              How do you feel about our Service
            </p>
            <p
              class="
                text-xs
                font-medium
                leading-3
                text-gray-500
                mt-3
                mb-6
                dark:text-gray-400
              "
            >
              We would love to get your feedback
            </p>
            <div class="flex items-center justify-between w-full">
              <button class="focus:outline-none">
                😍
              </button>
              <button class="focus:outline-none">
                🙂
              </button>
              <button class="focus:outline-none">
                😶
              </button>
              <button class="focus:outline-none">
                😕
              </button>
              <button class="focus:outline-none">
                😡
              </button>
            </div>
            <p
              class="
                text-xs
                leading-3
                underline
                text-gray-500
                dark:text-gray-400
                cursor-pointer
                mt-4
              "
              @click="modalHandler(false)"
            >
              Maybe later
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="button" class="w-full flex justify-center py-12">
      <button
        class="
          focus:outline-none
          mx-auto
          transition
          duration-150
          ease-in-out
          hover:bg-indigo-600
          bg-indigo-700
          rounded
          text-white
          px-4
          sm:px-8
          py-2
          text-xs
          sm:text-sm
        "
        @click="modalHandler(true)"
      >
        Review
      </button>
    </div>
  </div>
</template>

<script setup>
const { modalHandler } = useModal()

const show = ref(false)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
