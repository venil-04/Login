/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}","./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'my-background-image': "url(./src/assets/loginbg.avif)",
      },
    },
  },
  plugins: [],
}

