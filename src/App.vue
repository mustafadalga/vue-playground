<script setup lang="ts">
import useAxios from "@/composables/useAxios";
import { useStore } from "vuex";
import { computed, watch } from "vue";

const store = useStore();
const { axios } = useAxios();
const activeClient = computed(() => store.getters.getActiveclient);

function changeClient() {
  const clients = [ 1, 2, 3, 4, 5 ];
  const randomIDClient = clients[Math.floor(Math.random() * clients.length) + 1];
  store.commit("cancelAxiosCancelToken");
  store.commit("setAxiosCancelToken");
  store.commit("setActiveClient", randomIDClient);
}

watch(() => activeClient.value, getUsers)

async function getUsers() {
  const response = await axios.get("https://reqres.in/api/users?delay=3");
  //...
}
</script>

<template>
  <main class="p-10 grid gap-5">
    <button type="button" @click="changeClient()" class="bg-indigo-500 text-white font-bold py-2 px-4 rounded">Change
      Client
    </button>
  </main>

</template>
