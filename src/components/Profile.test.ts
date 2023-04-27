import { render, cleanup } from "@testing-library/vue";
import { it, describe, expect, vi, afterEach } from "vitest";
import { createStore } from "vuex";
import type { User } from "@/types/types";
import type { State } from "@/store";
import type { Store } from 'vuex'
import Profile from "./Profile.vue";

afterEach(cleanup);

function createVuexStore(user: User): Store<State> {
    return createStore({
        state: {
            user
        },
        getters: {
            getUser: (state: State): State["user"] => state.user
        }
    })
}


describe("Profile.vue", async () => {
    it("should show user information:Testing with a Real Vuex Store", async () => {
        const user: User = {
            username: "johndoe",
            fullName: "John Doe",
            age: 30,
            job: "Developer",
            followers: 100,
            following: 50,
            repositories: 10
        }
        const store: Store<State> = createVuexStore(user);

        const { findByTestId } = render(Profile, {
            global: {
                plugins: [ store ]
            },
        })

        const username = await findByTestId("username");
        const fullName = await findByTestId("fullName");
        const age = await findByTestId("age");
        const job = await findByTestId("job");
        const followers = await findByTestId("followers");
        const following = await findByTestId("following");
        const repositories = await findByTestId("repositories");
        //@ts-ignore
        expect(username).toHaveTextContent(user.username);
        //@ts-ignore
        expect(fullName).toHaveTextContent(user.fullName);
        //@ts-ignore
        expect(age).toHaveTextContent(user.age);
        //@ts-ignore
        expect(job).toHaveTextContent(user.job);
        //@ts-ignore
        expect(followers).toHaveTextContent(user.followers);
        //@ts-ignore
        expect(following).toHaveTextContent(user.following);
        //@ts-ignore
        expect(repositories).toHaveTextContent(user.repositories);
    });

});