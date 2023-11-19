/* eslint-disable @typescript-eslint/no-var-requires */

/* @type {import('tailwindcss/defaultTheme')} */
const defaultTheme = require("tailwindcss/defaultTheme")


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ["RubikVariable", "Rubik", ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [
        require("@kobalte/tailwindcss"),
    ],
}
