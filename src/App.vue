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
</script>

<template>
  <main class="p-10 grid gap-5">
    <button @click="form.showFilter=!form.showFilter"
    class="text-indigo-500 bg-indigo-100 border border-solid border-indigo-300 px-5 py-1 rounded-lg ml-auto">Hide Filter</button>

   <Transition>
     <section v-show="form.showFilter" class="grid gap-5 place-items-end">
       <Kinds :onClear="()=>form.kind=''"
              :onSelect="selectedKind=>form.kind=selectedKind"/>

       <Input v-model="form.title" class="max-w-lg"/>
     </section>
   </Transition>

    <div class=" grid grid-cols-3 gap-5">
      <TransitionGroup name="list">
        <MovieCard v-for="movie in filteredMovies" :movie="movie"
                   :key="movie"/>
      </TransitionGroup>
    </div>
  </main>

</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.v-move,
.v-enter-active,
.v-leave-active {
  transition: 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
