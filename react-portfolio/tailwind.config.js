/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mountains': "url('https://wallpaperaccess.com/full/5453427.jpg')",
        'watercolor': "url('https://i.pinimg.com/originals/3e/95/8b/3e958bb7752b4252e3ae6cbe459eb1c9.jpg')",
        'wave': "url('https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?w=1380&t=st=1683042668~exp=1683043268~hmac=e997154866c549f478248c9d2340792fd1004ab86eac1b31f855e17f137354e0')",
        'cyan-wall': "url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-102452.jpg?w=900&t=st=1683043645~exp=1683044245~hmac=7e7cfb5cd6578c6ba8e3eec2081dd6b9be4b3e79494b80fd212f201b87ac47a9')",
        'mountain-cyan': "url('https://img.freepik.com/free-vector/blue-shades-mountains-landscape_23-2148273707.jpg?size=626&ext=jpg&ga=GA1.1.911587121.1683035488&semt=robertav1_2_sidr')",


      },
      fontFamily: {
        burtons: "burtons",
      }
    },
  },
  plugins: [],
}
