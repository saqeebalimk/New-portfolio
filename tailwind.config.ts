import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#00f0ff", // Neon Cyan
                    hover: "#00d6e6",
                },
                secondary: {
                    DEFAULT: "#7000ff", // Neon Purple
                    hover: "#5e00d6",
                },
                card: {
                    DEFAULT: "rgba(255, 255, 255, 0.05)",
                    hover: "rgba(255, 255, 255, 0.1)",
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                shimmer: {
                    "100%": { transform: "translateX(100%)" },
                },
            },
            animation: {
                shimmer: "shimmer 2s infinite",
            },
        },
    },
    plugins: [],
};
export default config;
