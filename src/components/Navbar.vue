<script lang="ts" setup>
import { useRoute } from "vue-router";

interface ILink {
  name: string,
  title: string,
  class: string,
  hoverClass: string
}

const route = useRoute();

const links: ILink[] = [
  {
    name: "vue",
    title: "Vue",
    class: "underline",
    hoverClass: "hover:underline"
  },
  {
    name: "react",
    title: "React",
    class: "underline",
    hoverClass: "hover:underline"
  },
  {
    name: "angular",
    title: "Angular",
    class: "underline",
    hoverClass: "hover:underline"
  },
]

const linkClass = (link: ILink) => {
  let classes = `text-black transition-all ${link.hoverClass}`

  if (link.name == route.name) {
    classes += ` ${link.class}`
  }

  return classes;
}
</script>
<template>
  <nav>
    <ul class="flex items-center gap-5">
      <li v-for="link in links"
          :class="linkClass(link)">

        <router-link :to="{name:link.name}">
          {{ link.title }}
        </router-link>

      </li>
    </ul>
  </nav>
</template>
