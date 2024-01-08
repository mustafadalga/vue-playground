import { computed, watch } from "vue";
import { useStore } from "vuex";

export default function useCheckUserPosts() {
  const store = useStore();
  const activeUserID = computed(() => store.getters.getActiveUserID);
  const handler = async () => {
    store.commit("setApisLoadState", { api: "posts", isCalled: true });
    await store.dispatch("setPosts");
    store.commit("setApisLoadState", { api: "posts", isLoaded: true });
  };

  watch(() => activeUserID.value, handler, { immediate: true });
}
