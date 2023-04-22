/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            keyframes: {
                "slide-left-to-center": {
                    "0%": {
                        transform: "translateX(-100%)"
                    },
                    "100%": {
                        transform: "translateX(0%)"
                    }
                },
                "slide-center-to-left": {
                    "0%": {
                        transform: "translateX(0%)"
                    },
                    "100%": {
                        transform: "translateX(-100%)"
                    }
                },
                "slide-right-to-center": {
                    "0%": {
                        transform: "translateX(100%)"
                    },
                    "100%": {
                        transform: "translateX(0%)"
                    }
                },
                "slide-center-to-right": {
                    "0%": {
                        transform: "translateX(0)"
                    },
                    "100%": {
                        transform: "translateX(100%)"
                    }
                },
            }
        },
    }
}
