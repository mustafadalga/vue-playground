import type { IUser } from "@/types";
import type { IState } from "@/store/types";

export default {
    setUsers(state: IState, users: IUser[]) {
        state.users = users;
    },
    setNotification(state: IState, notification: string) {
        state.notifications.push(notification);
    }
}