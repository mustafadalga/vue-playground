import { describe, it, beforeEach, vi, expect } from "vitest";
import { defineComponent, onMounted } from "vue";
import { createStore, useStore } from "vuex";
import useCheckUserPosts from "./useCheckUserPosts";
import { mount } from "@vue/test-utils"
import type { State } from "@/store";

const store = createStore<State>({
    state: {
        posts: [],
        activeUserID: 0,
        apisLoadState: {
            posts: {
                isLoaded: false,
                isCalled: false
            }
        }
    },
    getters: {
        getActiveUserID: (state) => state.activeUserID,
    },
    mutations: {
        setApisLoadStates: () => {
        },
        setActiveUserID: (state, id: number) => state.activeUserID = id,
    },
    actions: {
        setPosts: () => {
        }
    }
})


const TestComponent = defineComponent({
    setup() {
        const store = useStore();
        useCheckUserPosts();

        function changeActiveUserID() {
            store.commit("resetStore");
            const id = Math.floor(Math.random() * 100) + 1;
            store.commit("setActiveUserID", id);
        }

        onMounted(() => {
            changeActiveUserID()
        })

    },
    template: "<h1></h1>"
})

describe("useCheckUserPosts", () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })
    it('should watch and fetch posts by active user ID', async () => {
        const commitSpy = vi.spyOn(store, 'commit');
        const dispatchSpy = vi.spyOn(store, 'dispatch');

        mount(TestComponent, {
            global: {
                plugins: [ store ]
            },
        });

        await vi.runAllTimers();
        expect(commitSpy).toHaveBeenCalledWith('setApisLoadState', { api: 'posts', isCalled: true });
        expect(dispatchSpy).toHaveBeenCalledWith('setPosts');
    });
});