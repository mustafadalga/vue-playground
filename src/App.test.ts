import { createStore, Store } from 'vuex';
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { key, store } from "@/store";
import type { User } from "@/types/types";
import App from "@/App.vue";
import { DOMWrapper, mount, VueWrapper } from "@vue/test-utils";
import type { State } from "@/store"

const localStorageMock: Storage = (() => {
    let store: Record<string, string> = {};

    return {
        getItem: (key: string): string => store[key] ?? null,
        setItem: (key: string, value: string): void => {
            store[key] = value.toString();
        },
        removeItem: (key: string): void => {
            delete store[key];
        },
        clear: (): void => {
            store = {};
        },
        key: (index: number): string | null => "",
        length: Object.keys(store).length
    };
})();

function createVuexStore(): Store<State> {
    return createStore({
        state: {
            user: {}
        },
        getters: {
            getUser: (state: State): State["user"] => state.user
        },
        mutations: {
            restoreUser(state: State): void {
                const user: string | null = localStorage.getItem("user");
                if (user) {
                    state.user = JSON.parse(user);
                }
            },
        }
    })
}


let originalLocalStorage: Storage;

beforeAll((): void => {
    originalLocalStorage = window.localStorage;
    (window as any).localStorage = localStorageMock;

});

afterAll((): void => {
    (window as any).localStorage = originalLocalStorage;
});


describe("App.vue", (): void => {
    const user: User = {
        username: 'john',
        fullName: 'Jon Doe',
        job: 'Software Developer',
        age: 14,
        followers: 100,
        following: 55,
        repositories: 23
    };

    it('sets user data in local storage', async (): Promise<void> => {
        await store.commit('setUser', user);
        const localStorageUser: string | null = localStorage.getItem('user');
        expect(localStorageUser).toBe(JSON.stringify(user));
    });

    it('clears user data from local storage', async ():Promise<void> => {
        await store.commit('setUser', user);
        await store.commit("clearUser");
        const localStorageUser: string | null = localStorage.getItem('user');
        expect(localStorageUser).toBeNull();
    });

    it('restores user data from local storage', async ():Promise<void> => {
        localStorage.setItem("user", JSON.stringify(user))
        const store: Store<State> = createVuexStore();

        const wrapper: VueWrapper = mount(App, {
            global: {
                provide: {
                    [key as symbol]: store
                }
            }
        });

        const button: DOMWrapper<HTMLButtonElement> = await wrapper.find("button");
        await button.trigger("click");
        expect(wrapper.html()).toContain(user.username);
    });

});
