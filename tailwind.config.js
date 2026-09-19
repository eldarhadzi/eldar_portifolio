/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
	"./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	},
	fontFamily:{
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
  		colors: {
  			primary: '#F5F7F2',
			surface: '#F5F7F2',
			accent: {
				DEFAULT: "#00ff99",
				hover: "#00e187",
				dark: "#00693f"
			}
  		},
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
