<script lang="ts" setup>
interface ILink {
  name: string,
  title: string,
}

const links: ILink[] = [
  {
    name: "vue",
    title: "Vue",
  },
  {
    name: "react",
    title: "React",
  },
]
</script>
<template>
  <nav>
    <ul class="flex items-center h-12 gap-5 bg-red-100 justify-center">
      <li v-for="link in links">

        <router-link :to="{name:link.name}" class="underline cursor-pointer">
          {{ link.title }}
        </router-link>

      </li>
    </ul>
  </nav>
</template>