
<template>
  <div
    v-if="post"
    class="w-full"
  >
    <BlogToTop />
    <ContentRenderer :value="post">
      <div class="w-full flex flex-col px-4 lg:p-12">
        <div class="flex flex-col-reverse lg:flex-row w-full justify-around items-center lg:justify-around">
          <div class="flex flex-col justify-center items-center lg:justify-start lg:items-start prose prose-4xl">
            <h1 class="text-4xl lg:text-6xl leading-10 prose prose-xl lg:whitespace-nowrap">
              {{ post?.title || 'Something on the way' }}
            </h1>
            <p class="text-xl lg:min-w-[360px]">
              {{ post?.excerpt || 'I will leave most of the written content to the last 6 hours, because it is easy to predict how long each article will take' }}
            </p>
            <div class="flex flex-col md:flex-row gap-4 items-center">
              <p> Completed: {{ post?.updated || 'sometime in the future' }}</p>
              <a v-if="post.link" :href="post.link" class="text-[#5a4ec9] no-underline cursor-pointer" target="_blank">Reference</a>
            </div>
          </div>
          <AppLottie
            :src="'/projects/pages/happy-hacker.json'"
            class="h-[420px] lg:h-[600px] lg:ml-[-30px]"
          />
        </div>
      </div>
      <div v-if="post.type === 'thoughts'" class="my-16 border-t-2 border-grey-200 flex justify-center items-center">
        <ContentRendererMarkdown :value="post" class="w-full max-w-[680px] post-default prose prose-md mt-16">
          <p class="m-0">
            {{ post }}
          </p>
        </ContentRendererMarkdown>
      </div>
    </ContentRenderer>
  </div>
</template>

<script setup lang="ts">

import { QueryBuilderWhere } from '@nuxt/content/dist/runtime/types'

interface Props {
  id: number
}

const props = withDefaults(defineProps<Props>(), {
  id: 0
})

const route = useRoute()
const path = computed(() => route.path)
const post = ref()

async function getShowcase () {
  const trimPath = route.path.charAt(path.value.length - 1) === '/' ? path.value.slice(0, -1) : path.value
  const options: QueryBuilderWhere = props.id !== 0 ? { id: 1 } : { visible_on: trimPath }
  post.value = await queryContent('tasks').where(options).findOne()
}

getShowcase()

watch(() => route.name, () => getShowcase(), { deep: true })

</script>

<style>

/* Default Post Layout */

.post-default h1 {
  margin-bottom: 2rem;
  margin-top: 4rem;
  text-decoration: none !important;
}

/* .post-default {
  margin-bottom: 2rem;
  margin-top: 4rem;
  text-decoration: none !important;
} */

</style>
