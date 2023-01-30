interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    },
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    }
}

interface IResponse {
    data: IUser[]
}

interface AxiosError extends Error {
    config: object;
    response: object;
    isAxiosError: boolean;
}

export type {
    IUser,
    IResponse,
    AxiosError
}