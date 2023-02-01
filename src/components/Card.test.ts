import { describe, expect, it } from "vitest";
import { render } from "@testing-library/vue";
import data from "@/data";
import Card from "./Card.vue";
import type { IData } from "@/types";

describe("Card.vue", () => {
    it("Should show summary title", () => {
        const {queryByTestId} = render(Card, {
            props: {
                card: data,
            }
        });

        const element = queryByTestId("title") as HTMLElement;
        const expectedTitle: string = data.title;

        expect(element).toHaveTextContent(expectedTitle);
    });

    it("Should show Coming soon text if there is no language", () => {
        const card: IData = {
            ...data,
            hasLanguage: false
        }

        const {queryByTestId} = render(Card, {
            props: {
                card
            }
        });

        const element = queryByTestId("coming-soon") as HTMLElement;
        const expectedResult: string = "Coming Soon";

        expect(element).toHaveTextContent(expectedResult);
    });

    it("Should show language if there is language", () => {
        const card: IData = {
            ...data,
            hasLanguage: true,
            language: "English"
        }

        const {queryByTestId} = render(Card, {
            props: {
                card
            }
        });

        const element = queryByTestId("language") as HTMLElement;
        const expectedResult: string = card.language;

        expect(element).toHaveTextContent(expectedResult);
    });

    it("Should rate-of-change element background and text color be red if  rate-of-change is less than zero", () => {
        const card: IData = {...data}
        card.rateofChange = -12;

        const {queryByTestId} = render(Card, {
            props: {
                card
            }
        });

        const element = queryByTestId("rate-of-change") as HTMLElement;
        const expectedClassName: string = "bg-red-100 text-red-500";

        expect(element).toHaveClass(expectedClassName);
    });

    it("Should rate-of-change element background and text color be red if rate-of-change is zero", () => {
        const card: IData = {...data}
        card.rateofChange = 0;

        const {queryByTestId} = render(Card, {
            props: {
                card
            }
        });

        const element = queryByTestId("rate-of-change") as HTMLElement;
        const expectedClassName: string = "bg-red-100 text-red-500";


        expect(element).toHaveClass(expectedClassName);
    });

    it("Should rate-of-change element background and text color be green if rate-of-change is greater than zero", () => {
        const card: IData = {...data}
        card.rateofChange = 40;

        const {queryByTestId} = render(Card, {
            props: {
                card
            }
        });

        const element = queryByTestId("rate-of-change") as HTMLElement;
        const expectedClassName: string = "bg-green-100 text-green-500";

        expect(element).toHaveClass(expectedClassName);
    });

    it("Should show rate of success", () => {
        const {queryByTestId} = render(Card, {
            props: {
                card: data,
            }
        });

        const element = queryByTestId("pie-chart") as HTMLElement;
        const expectedText: string = data.rateofSuccess;

        expect(element).toHaveTextContent(expectedText);
    });

    it("Should the value of the css percent variable be correctly", () => {
        const {queryByTestId} = render(Card, {
            props: {
                card: data
            }
        });

        const pieChart = queryByTestId("pie-chart") as HTMLElement;
        const pieChartPercent: string = `--percent: ${data.rateofSuccess};`;

        //@ts-ignore
        expect(pieChart).toHaveAttribute('style', pieChartPercent);
    });
});
