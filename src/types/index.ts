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

/**
 * IUser interface describes the properties of a User.
 */
interface IUser {
    /**
     * Unique identifier for the User.
     */
    id: number;

    /**
     * Full name of the User.
     */
    name: string;

    /**
     * Username chosen by the User.
     */
    username: string;

    /**
     * Email address of the User.
     */
    email: string;

    /**
     * Address of the User.
     */
    address: {
        /**
         * Street name of the User's address.
         */
        street: string;

        /**
         * Suite number of the User's address.
         */
        suite: string;

        /**
         * City of the User's address.
         */
        city: string;

        /**
         * Zip code of the User's address.
         */
        zipcode: string;

        /**
         * Geographical coordinates of the User's address.
         */
        geo: {
            /**
             * Latitude of the User's address.
             */
            lat: string;

            /**
             * Longitude of the User's address.
             */
            lng: string;
        };
    };

    /**
     * Phone number of the User.
     */
    phone: string;

    /**
     * Website URL of the User.
     */
    website: string;

    /**
     * Company where the User is working.
     */
    company: {
        /**
         * Name of the company where the User works.
         */
        name: string;

        /**
         * Catch phrase of the company where the User works.
         */
        catchPhrase: string;

        /**
         * Corporate strategy or 'bs' of the company where the User works.
         */
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
