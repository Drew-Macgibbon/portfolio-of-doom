<template>
  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2 lg:gap-8 w-full">
    <div
      v-for="challenge in data"
      :key="challenge.title"
    >
      <ContentRenderer :value="challenge!">
        <CodeChallenge>
          <template #spec>
            <div class="prose prose-md">
              <h2 class="mt-0 mb-4">
                {{ challenge.title }}
              </h2>
              <img :src="challenge.image" class="w-[150px]">
            </div>
          </template>
          <template #solution>
            <ContentRendererMarkdown :value="challenge">
              <p class="m-0 flex-wrap flex break-normal">
                {{ challenge }}
              </p>
            </ContentRendererMarkdown>
          </template>
        </CodeChallenge>
      </ContentRenderer>
    </div>
  </div>
</template>

<script setup lang="ts">

const { data } = await useAsyncData('test-data', () => queryContent('challenges', 'javascript').skip(0).limit(5).find())

definePageMeta({
  layout: 'tabbed',
  name: 'Challenges'
})

</script>

<style>

pre code .line {
  white-space: normal;
}

.code-challenge {
  margin: 0;
  padding: 1.6rem;
  line-height: 1.6rem;
}

.code-challenge, li {
  line-height: 2rem;
}

.code-challenge ol {
  margin: 30px 0;
}

.code-challenge h3 {
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1.6rem 0;
}

.code-challenge h5 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1.4rem 0;
}

pre {
  margin-top: 1.6rem;
  background: black !important;
  border-radius: 8px;
  padding: 1rem;
}

</style>
