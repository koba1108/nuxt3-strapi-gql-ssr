<script lang="ts" setup>
const navs = [
  {name: "Home", path: "/"},
  {name: "Create", path: "/create"},
];
</script>

<template>
  <header class="p-4 flex items-center bg-gray-200">
    <ul class="flex items-center gap-4 font-bold">
      <li v-for="n in navs" :key="n.path">
        <NuxtLink
            class="border-black border-solid border-b-2"
            :to="n.path"
        >
          {{ n.name }}
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
</style>
