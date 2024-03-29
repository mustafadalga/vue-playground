<script setup lang="ts">
import { computed, ref } from "vue";
import { movies } from "@/data/movies";
import Kinds from "@/components/Kinds.vue";
import MovieCard from "@/components/MovieCard.vue";
import Input from "@/components/Input.vue";

const form = ref({
  kind: "",
  title: "",
  showFilter: true
})
const filteredMovies = computed(() => {
  return movies.filter((movie) => (!form.value.kind || (form.value.kind && movie.kinds.includes(form.value.kind))) && movie.title.toLowerCase().includes(form.value.title.toLowerCase()))
})

function onClear() {
  form.value.title = "";
  form.value.kind = "";
}
</script>

<template>
  <main class="p-10 grid gap-5">
    <button @click="form.showFilter=!form.showFilter"
            class="text-indigo-500 bg-indigo-100 border border-solid border-indigo-300 px-5 py-1 rounded-lg ml-auto">
      Hide Filter
    </button>

    <Transition enter-active-class="fade-in-fwd" leave-active-class="fade-out-bck">
      <section v-show="form.showFilter" class="grid gap-5 place-items-end">
        <Kinds :onClear="onClear"
               :onSelect="selectedKind=>form.kind=selectedKind"/>

        <Input v-model="form.title" class="max-w-lg"/>
      </section>
    </Transition>

    <div class="mx-auto grid grid-cols-4 gap-4">
      <TransitionGroup name="list">
        <MovieCard v-for="movie in filteredMovies" :movie="movie"
                   :key="movie.title"/>
      </TransitionGroup>
    </div>
  </main>

</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(15px);
}
</style>
