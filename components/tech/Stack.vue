<template>
  <div class="w-full bg-gray-200 dark:bg-gray-900">
    <div class="container mx-auto flex items-start justify-center">
      <div class="bg-white dark:bg-gray-800 shadow rounded mx-auto p-6 w-full">
        <h1 class="text-2xl font-medium leading-normal text-gray-800 mb-6">
          My Current Stack
        </h1>
        <div class="w-full">
          <div
            v-for="stack in myStack"
            :key="stack.title"
          >
            <ContentRenderer :value="stack">
              <div class="relative bg-gray-100 dark:bg-gray-700 flex rounded">
                <div class="border-r border-gray-200 flex items-center justify-center">
                  <div class="w-20 px-4 py-5">
                    <img class="w-full h-full overflow-hidden object-cover rounded" :src="stack.image" :alt="stack.title + 'logo'">
                  </div>
                </div>
                <div class="flex pl-4 py-4 lg:py-3 justify-between w-full">
                  <div class="flex flex-col h-full justify-center">
                    <h4 class="mb-2 lg:mb-1 text-sm leading-3 font-bold text-gray-800 dark:text-gray-100">
                      {{ stack.title }}
                    </h4>
                    <div class="flex flex-col lg:flex-row items-start lg:items-center">
                      <p class="text-xs leading-5 font-normal text-gray-800 dark:text-gray-100">
                        Expires 06/21 -
                      </p>
                      <p class="text-xs leading-5 font-normal text-gray-800 dark:text-gray-100">
                        Last updated on 14 March 2020
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-5 h-5 absolute inset-0 m-auto mt-2 lg:mt-4 mr-2 lg:mr-4 text-indigo-700 dark:text-indigo-600 dark:hover:text-indigo-500 hover:text-indigo-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-edit"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                    <line x1="16" y1="5" x2="19" y2="8" />
                  </svg>
                </div>
              </div>
            </ContentRenderer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const myStack = ref()
myStack.value = await queryContent('tech').where({ current: true }).skip(0).limit(5).find()
// const test2 = computed(async () => await queryContent('tech').where({ current: true }).skip(0).limit(5).find())
// const test3 = await queryContent('/content/tech').where({ current: true }).skip(0).limit(5).find()

// console.log('stack1', test2)
// console.log('stack2', test3)

</script>
