import { useStore } from "vuex";
import { computed } from "vue";
import axios from "axios";
import type { InternalAxiosRequestConfig, CancelTokenSource, AxiosInstance, AxiosError } from "axios";

interface IExtendedAxiosError extends AxiosError {
    toJSON: () => Record<string, unknown>;
}

export default function useAxios() {
    const store = useStore();
    const jwt = computed<string>(() => store.getters.getJWT);
    const axiosCancelToken = computed<CancelTokenSource>(() => store.getters.getAxiosCancelToken);
    const axiosInstance: AxiosInstance = axios.create({
        baseURL: store.getters.getApiBaseUrl
    });

    setup();

    function setup() {
        axiosInstance.interceptors.request.use(onRequest, (error) => Promise.reject(error));
        axiosInstance.interceptors.response.use(response => response, onResponseError);
    }

    function onRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
        if (config.headers) {
            config.headers.Authorization = jwt.value;
        }
        config.cancelToken = axiosCancelToken.value.token;
        return config;
    }

    function onResponseError(error: IExtendedAxiosError): Promise<AxiosError> | undefined {
        const isNetworkError = Object.hasOwn(error, "toJSON") && error.toJSON().message == "Network Error";
        return isNetworkError ? undefined : Promise.reject(error);
    }

    return {
        axios: axiosInstance
    }
}
