/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            animation: {
                "slide-down": "slide-down .5s ease-in-out",
                "slide-up": "slide-up .5s ease-in-out",
            },
            keyframes: {
                "slide-down": {
                    "0%": {
                        transform: "translateY(-100%)"
                    },
                    "100%": {
                        transform: "translateY(0)"
                    }
                },
                "slide-up": {
                    "0%": {
                        transform: "translateY(0)"
                    },
                    "100%": {
                        transform: "translateY(-100%)"
                    }
                },
            }
        },
        screens: {
            "lg": "1024px",
            "2lg": "1080px",
            "xl": "1280px",
            "2xl": "1440px"
        },
    },
};
