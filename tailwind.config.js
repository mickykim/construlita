module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('../public/img/modelos4.png')",
                banner: "url('../public/img/modelos1.png')",
                video: "url('../public/img/modelos3.png')",
            },
            colors: {
                yellow: "#FFD50B",
                black: "#231F1C",
                "light-gray": "#F0F1F1",
                "dark-gray": "#777C7E",
            },
            height: {
                hero: "81vh",
                personaliza: "65vh",
            },
            width: {
                "11/24": "45.83%",
            },
            border: {
                1: "1px",
            },
        },
    },
    plugins: [],
};
