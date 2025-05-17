module.exports = {
  content: ["./index.html", "./app.js"],
  theme: {
    extend: {
      colors: {
        maria: {
          primary: "#6C63FF",
          secondary: "#FF6584",
          dark: "#3F3D56",
          light: "#F8F9FA"
        }
      },
      boxShadow: {
        maria: "0 10px 20px -5px rgba(108, 99, 255, 0.2)",
        "maria-inner": "inset 0 2px 4px 0 rgba(108, 99, 255, 0.1)"
      }
    }
  },
  plugins: []
}
