/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		screens: {
			sm: "540px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			borderRadius: {
				"4xl": "2rem",
				"5xl": "3rem",
				"6xl": "4rem",
				"7xl": "5rem",
			},
			colors: {
				// Vibe sunset palette
				vibe: {
					purple: {
						DEFAULT: "#3D348B",
						50: "#E8E7F4",
						100: "#D1CFE9",
						200: "#A39FD3",
						300: "#756FBD",
						400: "#4F48A4",
						500: "#3D348B",
						600: "#312A6F",
						700: "#251F53",
						800: "#181538",
						900: "#0C0A1C",
					},
					indigo: {
						DEFAULT: "#7678ED",
						50: "#F0F0FD",
						100: "#E1E1FB",
						200: "#C3C4F7",
						300: "#A5A6F3",
						400: "#8789EF",
						500: "#7678ED",
						600: "#4A4CE6",
						700: "#2527D4",
						800: "#1D1EA4",
						900: "#151674",
					},
					yellow: {
						DEFAULT: "#F7B801",
						50: "#FEF6DC",
						100: "#FDEFC4",
						200: "#FBE193",
						300: "#FAD362",
						400: "#F8C531",
						500: "#F7B801",
						600: "#C59301",
						700: "#936E01",
						800: "#624900",
						900: "#312500",
					},
					orange: {
						DEFAULT: "#F18701",
						50: "#FDEAD4",
						100: "#FCD9B0",
						200: "#FAC382",
						300: "#F7A94F",
						400: "#F49828",
						500: "#F18701",
						600: "#BE6B01",
						700: "#8B4F01",
						800: "#583200",
						900: "#251500",
					},
					red: {
						DEFAULT: "#F35B04",
						50: "#FDE4D7",
						100: "#FCD0BA",
						200: "#F9AE85",
						300: "#F78C50",
						400: "#F5742A",
						500: "#F35B04",
						600: "#C14803",
						700: "#8F3502",
						800: "#5D2302",
						900: "#2B1001",
					},
				},
				// Semantic colors using the palette
				primary: {
					50: "#E8E7F4",
					100: "#D1CFE9",
					200: "#A39FD3",
					300: "#756FBD",
					400: "#4F48A4",
					500: "#3D348B",
					600: "#312A6F",
					700: "#251F53",
					800: "#181538",
					900: "#0C0A1C",
				},
				accent: {
					50: "#FEF6DC",
					100: "#FDEFC4",
					200: "#FBE193",
					300: "#FAD362",
					400: "#F8C531",
					500: "#F7B801",
					600: "#C59301",
					700: "#936E01",
					800: "#624900",
					900: "#312500",
				},
			},
			fontFamily: {
				display: ["Midnight", ...defaultTheme.fontFamily.sans],
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
				arimo: ["Arimo", ...defaultTheme.fontFamily.sans],
			},
			animation: {
				"fade-in": "fadeIn 0.5s ease-out",
				"slide-up": "slideUp 0.5s ease-out",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
		},
	},
	safelist: [
		{
			pattern: /row-start-\d+/,
			variants: ["md"],
		},
	],
	plugins: [
		require.resolve("prettier-plugin-astro"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
	],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
