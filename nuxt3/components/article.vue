<script lang="ts" setup>
import {Articles} from '~/graphql/types'

const props = defineProps<{
  article: Articles
}>()
</script>

<template>
  <div class="p-4 flex flex-col justify-center items-center rounded border border-solid border-gray-400">
    <div>タイトル: {{ props.article.name }}</div>
    <div>本文: {{ props.article.content }}</div>
  </div>
</template>

<style lang="scss" scoped>
</style>
