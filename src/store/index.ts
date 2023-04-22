import { reactive } from "vue";
import type { ISocialProfiles, User } from "@/types";

interface IState {
    activeStepIndex: number,
    clickedButton: string,
    userInformation: User
}


const store = ({
    state: reactive<IState>({
        activeStepIndex: 1,
        clickedButton: "next",
        userInformation: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            languages: [],
            skills: [],
            gender: "",
            socialProfiles: {
                twitter: "",
                instagram: "",
                linkedin: ""
            }
        }
    }),
    getters: {
        getActiveStepIndex(): number {
            return store.state.activeStepIndex;
        },
        getClickedButton(): string {
            return store.state.clickedButton;
        },
        getUserInformation(): User {
            return store.state.userInformation;
        },
    },
    mutations: {
        setActiveStepIndex(index: number): void {
            store.state.activeStepIndex = index;
        },
        setClickedButton(clickedButton: string): void {
            store.state.clickedButton = clickedButton
        },
        setFullName(firstName: string, lastName: string): void {
            store.state.userInformation.firstName = firstName;
            store.state.userInformation.lastName = lastName;
        },
        setContact(email: string, phone: string): void {
            store.state.userInformation.email = email;
            store.state.userInformation.phone = phone;
        },
        setLanguages(languages: string[]): void {
            store.state.userInformation.languages = languages;
        },
        setSkills(skills: string[]): void {
            store.state.userInformation.skills = skills;
        },
        setGender(gender: string): void {
            store.state.userInformation.gender = gender;
        },
        setSocialProfiles(profiles: ISocialProfiles): void {
            store.state.userInformation.socialProfiles = profiles;
        }
    },
})

export default store;