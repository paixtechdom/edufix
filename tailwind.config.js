/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "linear-gradient(to right, rgb(0,0,0,0.8), rgb(0,0,0,0.8)), url('/src/assets/images/health.jpg')",  
        "heroSm": "linear-gradient(to right, rgb(0,0,0,0.6), rgb(0,0,0,0.6)), url('/src/assets/images/healthSm.jpg')",  
        
        "light": "radial-gradient(#60e9f3, rgba(0,0,0,0))",
        'light-gradient': "radial-gradient(circle, rgba(96, 233, 243, 0.9) 0%, rgba(96, 233, 243) 40%, rgba(96, 233, 243, 0) 80%)",
        
      },
      
      colors:{
        "primary": "#660a5f",
        "sec": "#f05923"
       
      }
    },
  },
  plugins: [],
}

