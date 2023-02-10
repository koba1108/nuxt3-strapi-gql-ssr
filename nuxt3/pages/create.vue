<script lang="ts" setup>
const form = ref({
  title: "",
  content: "",
});

const formDisabled = computed(() => {
  return form.value.title === "" || form.value.content === "";
});

async function createArticle(evt: Event) {
  evt.preventDefault();
  const res = await GqlCreateArticle({
    title: form.value.title,
    content: form.value.content,
    categories: ["1"],
    publishedAt: new Date().toISOString(),
  });
  console.log({res})
}

async function createArticles(evt: Event) {
  evt.preventDefault();
  console.log("量産開始")
  for (let i = 0; i < 100; i++) {
    console.log(i)
    await GqlCreateArticle({
      title: `タイトル_${i}`,
      content: `本文_${i}`,
      categories: ["1"],
      publishedAt: new Date().toISOString(),
    });
  }
  console.log("量産終了")
}
</script>

<template>
  <form class="h-[100vh] flex flex-col items-center justify-center gap-4">
    <h1>記事作成フォーム</h1>
    <input class="border border-black" type="text" v-model="form.title" placeholder="title"/>
    <textarea class="border border-black" v-model="form.content" placeholder="content"/>
    <button
        class="bg-gray-500 hover:bg-gray-400 text-white rounded px-4 py-2"
        :disabled="formDisabled"
        @click="createArticle"
    >
      作成
    </button>
    <!--button @click="createArticles">量産</button-->
  </form>
</template>

<style lang="scss" scoped>
</style>
