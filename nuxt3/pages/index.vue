<script lang="ts" setup>
import ArticleCard from "~/components/ArticleCard.vue";
import {Pagination, ArticleEntity, ArticleCategoryEntity} from "~/graphql/types";

const page = ref(1);
const pageSize = ref(9);
const articles = ref<ArticleEntity[]>([]);
const articlePagination = ref<Pagination>();
const hasMore = computed(() => {
  if (!articlePagination.value) {
    return false;
  }
  return articlePagination.value?.total > pageSize.value * page.value;
});
const categoryId = ref("");
const categories = ref<ArticleCategoryEntity[]>([]);

async function fetchArticles() {
  const res = await GqlFetchArticles({
    filters: {
      article_categories: categoryId.value ? {
        id: {
          eq: categoryId.value,
        },
      } : null,
    },
    pagination: {
      pageSize: pageSize.value,
      page: page.value,
    },
    sort: ["id:desc"],
  });
  articles.value = res.articles?.data as ArticleEntity[];
  articlePagination.value = res.articles?.meta?.pagination;
}

async function fetchCategories() {
  const res = await GqlFetchArticleCategories({
    pagination: {
      page: 1,
      pageSize: 100,
    },
  })
  categories.value = res.articleCategories?.data as ArticleCategoryEntity[];
}

function prev() {
  if (page.value <= 0) return;
  page.value--;
}

function next() {
  page.value++;
}

await Promise.all([
  fetchArticles(),
  fetchCategories(),
])

watch(page, () => fetchArticles());
watch(categoryId, () => {
  page.value = 1;
  fetchArticles();
});
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4">
    <div class="mt-6">
      {{ articlePagination }}
    </div>
    <div>
      <select class="border border-black" v-model="categoryId">
        <option value="">全て</option>
        <option v-for="c in categories" :key="c.id" :value="c.id">
          {{ c.attributes?.name }}
        </option>
      </select>
    </div>
    <div class="grid grid-cols-3 gap-4 items-center justify-center">
      <ArticleCard v-for="a in articles" :key="a.id" :article="a"/>
    </div>
    <div class="flex items-center gap-4">
      <button
          class="bg-gray-500 hover:bg-gray-400 disabled:bg-gray-100 disabled:text-black text-white rounded px-4 py-2"
          @click="prev"
          :disabled="page <= 1"
      >
        戻る
      </button>
      <div>page: {{ page }}</div>
      <button
          class="bg-gray-500 hover:bg-gray-400 disabled:bg-gray-100 disabled:text-black text-white rounded px-4 py-2"
          @click="next"
          :disabled="!hasMore"
      >
        次へ
      </button>
    </div>
  </div>
</template>
