<script lang="ts" setup>
import {ArticleEntity} from '~/graphql/types'

defineProps<{
  article: ArticleEntity
}>()
</script>

<template>
  <div class="p-4 flex flex-col justify-center gap-2 rounded-lg border border-solid border-gray-400">
    <div>id: {{ article.id }}</div>
    <div>タイトル: {{ article.attributes?.title }}</div>
    <div>本文: {{ article.attributes?.content }}</div>
    <div>
      <span
          v-for="ac in article.attributes?.article_categories?.data"
          class="text-sm bg-gray-200 rounded-lg py-1 px-3"
      >
        {{ ac.attributes?.name }}
      </span>
    </div>
    <div>作成日時: {{ article.attributes?.createdAt }}</div>
  </div>
</template>

<style lang="scss" scoped>
</style>
