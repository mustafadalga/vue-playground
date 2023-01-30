import type { IUser } from "@/types";

interface IState {
    users: IUser[],
    notifications: string[]
}

export type {
    IState
}