<script setup lang="ts">
import MovieCard from "@/components/MovieCard.vue";
import { computed, ref } from "vue";

const movies = [
  {
    "title": "The Shawshank Redemption",
    "kind": "Adventure"
  },
  {
    "title": "The Godfather",
    "kind": "War"
  },
  {
    "title": "The Dark Knight",
    "kind": "Thriller"
  },
  {
    "title": "Schindler's List",
    "kind": "Adventure"
  },
  {
    "title": "Pulp Fiction",
    "kind": "Romantic"
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "kind": "Thriller"
  },
  {
    "title": "The Good, the Bad and the Ugly",
    "kind": "Fantasy"
  },
  {
    "title": "Fight Club",
    "kind": "War"
  },
  {
    "title": "Forrest Gump",
    "kind": "Comedy"
  },
  {
    "title": "Inception",
    "kind": "Animation"
  },
  {
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "kind": "Fantasy"
  },
  {
    "title": "The Matrix",
    "kind": "Animation"
  },
  {
    "title": "Goodfellas",
    "kind": "Romantic"
  },
  {
    "title": "One Flew Over the Cuckoo's Nest",
    "kind": "Romantic"
  },
  {
    "title": "Seven Samurai",
    "kind": "Fantasy"
  },
  {
    "title": "Se7en",
    "kind": "Fantasy"
  },
  {
    "title": "The Silence of the Lambs",
    "kind": "War"
  },
  {
    "title": "City of God",
    "kind": "Thriller"
  },
  {
    "title": "Life is Beautiful",
    "kind": "Action"
  },
  {
    "title": "It's a Wonderful Life",
    "kind": "Romantic"
  },
  {
    "title": "The Usual Suspects",
    "kind": "Animation"
  },
  {
    "title": "Léon: The Professional",
    "kind": "Fantasy"
  },
  {
    "title": "Saving Private Ryan",
    "kind": "Action"
  },
  {
    "title": "The Green Mile",
    "kind": "War"
  },
  {
    "title": "Interstellar",
    "kind": "Thriller"
  },
  {
    "title": "The Prestige",
    "kind": "Fantasy"
  },
  {
    "title": "The Departed",
    "kind": "Action"
  },
  {
    "title": "The Pianist",
    "kind": "Thriller"
  },
  {
    "title": "Gladiator",
    "kind": "Romantic"
  },
  {
    "title": "American History X",
    "kind": "Action"
  },
  {
    "title": "The Lion King",
    "kind": "Thriller"
  },
  {
    "title": "The Intouchables",
    "kind": "Drama"
  },
  {
    "title": "Whiplash",
    "kind": "Sci-Fi"
  },
  {
    "title": "The Godfather: Part II",
    "kind": "Animation"
  },
  {
    "title": "The Sixth Sense",
    "kind": "Fantasy"
  },
  {
    "title": "The Social Network",
    "kind": "Fantasy"
  },
  {
    "title": "The Lives of Others",
    "kind": "Thriller"
  },
  {
    "title": "A Beautiful Mind",
    "kind": "War"
  },
  {
    "title": "The Terminator",
    "kind": "Adventure"
  },
  {
    "title": "The Truman Show",
    "kind": "Comedy"
  },
  {
    "title": "Blade Runner",
    "kind": "Comedy"
  },
  {
    "title": "Braveheart",
    "kind": "Sci-Fi"
  },
  {
    "title": "Jurassic Park",
    "kind": "Comedy"
  },
  {
    "title": "Toy Story",
    "kind": "Fantasy"
  },
  {
    "title": "Finding Nemo",
    "kind": "Thriller"
  },
  {
    "title": "The Wizard of Oz",
    "kind": "Comedy"
  },
  {
    "title": "Casablanca",
    "kind": "Thriller"
  },
  {
    "title": "Gone with the Wind",
    "kind": "Fantasy"
  },
  {
    "title": "The Sound of Music",
    "kind": "Animation"
  },
  {
    "title": "Raiders of the Lost Ark",
    "kind": "Fantasy"
  }
]
const kinds = [ "Action", "Romantic", "War", "Comedy", "Drama", "Thriller", "Adventure", "Sci-Fi", "Fantasy", "Animation" ];
const form = ref({
  kind: "",
  title: ""
})
const filteredMovies = computed(() => {
  return movies.filter((movie) => (!form.value.kind || (form.value.kind && movie.kind == form.value.kind)) && movie.title.toLowerCase().includes(form.value.title.toLowerCase()))
})
</script>

<template>
  <main class="p-10 grid gap-5">
    <ul class="flex items-center gap-3 flex-wrap">
      <li @click="form.kind=''"
          class="text-center cursor-pointer w-32 px-5 py-2 bg-indigo-200 hover:bg-indigo-300 rounded text-sm font-semibold text-gray-700">
        Clear Filter
      </li>
      <li v-for="kind in kinds" :key="kind"
          @click="form.kind=kind"
          class="text-center cursor-pointer w-32 px-5 py-2 bg-indigo-200 hover:bg-indigo-300 rounded text-sm font-semibold text-gray-700">
        {{ kind }}
      </li>
    </ul>
    <div>
      <input type="text" v-model="form.title">
    </div>
    <div class=" grid grid-cols-3 gap-5">
      <TransitionGroup name="list">
        <MovieCard v-for="movie in filteredMovies" image="https://source.unsplash.com/random" :movie="movie"
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

</style>