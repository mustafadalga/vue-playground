import { reactive } from "vue";

interface IState {
    currentFullPath: string,
    no: string
}


const store = ({
    state: reactive<IState>({
        currentFullPath: "",
        no: import.meta.env.VITE_NUMBER
    }),
    getters: {
        getCurrentFullPath(): string {
            return store.state.currentFullPath
        },
        getNo(): string {
            return store.state.no
        },
    },
    mutations: {
        setCurrentFullPath(fullPath: string): void {
            store.state.currentFullPath = fullPath;
        },
    },
})

export default store;