/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize : {
        "mBold" : "30px",
        "mlarge" : "22px",
        "mSmall" : "14px"
      }
    },
  },
  plugins: [],
}

