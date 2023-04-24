import { defineAsyncComponent, } from "vue";
import type { Component } from "vue";
import store from "@/store";

interface IError extends Error {
    message: string
}


function getCookie(cookineName: string): string | null {
    const name: string = cookineName + "=";
    const decodedCookie: string = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c: string = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function setCookie(name: string, value: string, time: number): void {
    let expires: string = "";

    if (time) {

        const date: Date = new Date();
        date.setTime(date.getTime() + time);
        expires = `; expires=${date.toUTCString()}`;

    }

    document.cookie = `${name}=${value};${expires};path=/`;
}


async function importWrapper(loader: () => Promise<any>): Promise<any> {
    try {
        return await loader();
    } catch (error: unknown) {
        handleImportModuleError(error as IError);
    }
}

function defineAsyncComponentWrapper(loader: () => Promise<Component>): Component {
    async function importFn(): Promise<Component> {
        try {
            return await loader();
        } catch (error: unknown) {
            handleImportModuleError(error as IError);
            return Promise.reject(error);
        }
    }

    return defineAsyncComponent(() => importFn());
}

function handleImportModuleError(error: IError) {
    const importModuleErrors: readonly string[] = [
        "Failed to fetch dynamically imported module",
        "Failed to load module script"
    ];

    if (importModuleErrors.every(err => error.message.includes(err))) return;

    const lastRefreshTime: string | null = getCookie("lastRefreshTime");
    const expirationTime: number = 5 * 60 * 1000; // 5 minutes
    const now: number = new Date().getTime();
    const isTimePassed: boolean = lastRefreshTime && ((now - parseInt(lastRefreshTime)) > expirationTime) ? true : false;

    if (!lastRefreshTime || isTimePassed) {
        setCookie("lastRefreshTime", now.toString(), expirationTime);
        const fullPath: string = store.getters.getCurrentFullPath();
        window.location.href = fullPath || window.location.href;
    }

    throw error;
}


export {
    importWrapper,
    defineAsyncComponentWrapper,
    handleImportModuleError
};