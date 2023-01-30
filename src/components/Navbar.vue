<script lang="ts" setup>
import { useRouter } from "vue-router";

interface ILink {
  name: string,
  title: string,
}

const router = useRouter();
const links: ILink[] = [
  {
    name: "vue",
    title: "Vue",
  },
  {
    name: "react",
    title: "React",
  },
];

function redirect(name: string): void {
  router.push({ name });
}
</script>
<template>
  <nav>
    <ul class="flex items-center h-12 gap-5 bg-red-100 justify-center">
      <li v-for="link in links">
        <button @click="redirect(link.name)"
                :data-testid="link.name"
                class="underline cursor-pointer">
          {{ link.title }}
        </button>
      </li>
    </ul>
  </nav>
</template>