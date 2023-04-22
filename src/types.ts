interface ISocialProfiles {
    twitter: string,
    linkedin: string,
    instagram: string,
}

interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string,
    languages: string[],
    skills: string[],
    gender: string,
    socialProfiles: ISocialProfiles
}

interface IOption {
    id: string;
    value: string;
    checked: boolean
}

export type {
    User,
    IOption,
    ISocialProfiles
}