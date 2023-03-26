/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'White':'#ffffff',
      'Cyan':{
        200: "#a5f3eb", /* (Full Slider Bar) */
        500: 	"#10d5c2", /* (Slider Backround) */
      },
      'GrayishRed':{
        100 : '#feece7', /*(Discount Background)*/
      },
      'Red':{
        100: 	'#ff8c66' /*(Discount Text)*/
      },
      'GrayishBlue':{
        100:'#eaeefb', /* (Empty Slider Bar) */
        200:'#cdd7ee', /* (Toggle Background) */
        700:'#858fad', /* (Text) */
        900:'#293356' /* (Text & CTA Background) */
      },
      'Blue' :{
        100: '#fafbff', /*(Main Background)*/
        200: '#bdccff' /*(CTA Text)*/
      }
    },

    fontWeight: {
      normal: '400',
      semibold: '600',
      extrabold: '800',
      'bold': '800',
    }
  },
  plugins: [],
}