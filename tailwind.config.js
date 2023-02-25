/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // add this line
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    // if you have other folders, add their paths too, like this:
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#18181b',
        potter: '#ea580c',
        gryffindor: '#d60b0b',
        hufflepuff: '#cf9d02',
        ravenclaw: '#2563eb',
        slytherin: '#15803d',
      },
    },
  },
  plugins: [],
}