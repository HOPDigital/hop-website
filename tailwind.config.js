/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                white_hop: "#FFFFFF",
                pale_hop: "#F4F5F7",
                grey_hop: "#DCDFE6",
                red_hop: "#EB3254",
                pink_hop: "#DD226D",
                purple_hop: "#8C4CF5",
                blur_hop: "#121632",
                darker_blur_hop: "#0C0F23",
                black_hop: "#1E1E1E",
            },
        },
    },
    plugins: [],
}

