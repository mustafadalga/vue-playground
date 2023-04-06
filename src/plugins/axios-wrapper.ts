import axios from "axios";
import { store } from "@/store";
import type { App } from "vue";
import type { AxiosRequestConfig, AxiosResponse, AxiosError,InternalAxiosRequestConfig } from "axios";
import type { IAxiosWrapperConstants } from "@/types";


interface IExtendedAxiosRequestConfig extends AxiosRequestConfig {
    headers: {
        Authorization?: string;
    };
}

interface IExtendedAxiosError extends AxiosError {
    toJSON: any;
}


export default {
    install: (app: App) => {

        const baseURLV1: string = import.meta.env.VITE_BASE_URL_V1;
        const baseURLV2: string = import.meta.env.VITE_BASE_URL_V2;

        const axiosObject: IAxiosWrapperConstants = {
            v1: axios.create({
                baseURL: baseURLV1
            }),
            v2: axios.create({
                baseURL: baseURLV2
            })
        };

        createRequestInterceptor(axiosObject);
        createResponseInterceptor(axiosObject)

        app.config.globalProperties.$axios = axiosObject;

        app.provide("$axios", axiosObject);
    }
};

function createRequestInterceptor(axiosObject: IAxiosWrapperConstants) {
    axiosObject.v1.interceptors.request.use(
        (config) =>
            handleInterceptorsRequest("v1", config as IExtendedAxiosRequestConfig));
    axiosObject.v2.interceptors.request.use(
        (config) =>
            handleInterceptorsRequest("v2", config as IExtendedAxiosRequestConfig));
}

function createResponseInterceptor(axiosObject: IAxiosWrapperConstants) {
    axiosObject.v1.interceptors.response.use(
        handleInterceptorsResponse,
        handleInterceptorsResponseError
    );
    axiosObject.v2.interceptors.response.use(
        handleInterceptorsResponse,
        handleInterceptorsResponseError
    );
}

function handleInterceptorsRequest(version: string, config: IExtendedAxiosRequestConfig): InternalAxiosRequestConfig<any> {
    const authorization: string = store.getters.getAuthorization;


    return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: authorization || undefined
        }
    } as InternalAxiosRequestConfig<any>;
}


function handleInterceptorsResponse(response: AxiosResponse): AxiosResponse {
    return response;
}

function handleInterceptorsResponseError(error: IExtendedAxiosError): any {
    if (Object.prototype.hasOwnProperty.call(error, "toJSON") && error.toJSON().message == "Network Error") {
        return;
    }

    return Promise.reject(error);
}
