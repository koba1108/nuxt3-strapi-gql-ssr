<script lang="ts" setup>

import {Articles} from "~/graphql/types";

const start = ref(0);
const articles = ref<Articles[]>([]);

async function fetchArticles() {
  const res = await GqlGetArticles({
    limit: 1,
    start: start.value,
  });
  articles.value = res.articles as Articles[];
}

function prev() {
  if (start.value <= 0) return;
  start.value--;
}

function next() {
  start.value++;
}

const page = computed(() => start.value + 1);

await fetchArticles()

watch(start, () => fetchArticles());
</script>

<template>
  <div class="h-[100vh] flex flex-col items-center justify-center gap-4">
    <div class="flex flex-col items-center justify-center">
      <Article v-for="a in articles" :key="a.id" :article="a"/>
    </div>
    <div class="flex items-center gap-4">
      <button
          class="bg-gray-500 hover:bg-gray-400 text-white rounded px-4 py-2"
          @click="prev"
          :disabled="start <= 0"
      >
        戻る
      </button>
      <div>page: {{ page }}</div>
      <button
          class="bg-gray-500 hover:bg-gray-400 text-white rounded px-4 py-2"
          @click="next"
          :disabled="articles.length < 1"
      >
        次へ
      </button>
    </div>
  </div>
</template>
