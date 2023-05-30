import type { AxiosInstance } from "axios";
/**
 * @module types
 */

interface IAxiosWrapperConstants {
    v1: AxiosInstance;
    v2: AxiosInstance;
}

interface IResponse {
    status: boolean,
    message: string,
    data: null | string,
    code: string
}

interface ErrorResponse {
    response: {
        [key: string]: any
    };
};

/**
 * Ipost functions
 */
interface IPost {
    userId: string,
    id: number,
    title: string,
    body: string
}


interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

interface IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}


export type {
    IAxiosWrapperConstants,
    IResponse,
    ErrorResponse,
    IPost,
    IUser,
    IPhoto
}
