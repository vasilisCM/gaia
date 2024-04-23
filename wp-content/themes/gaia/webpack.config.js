const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    global: path.resolve(__dirname, "src/js/index.js"), // Global
    home: path.resolve(__dirname, "src/js/pages/home.js"), // Home
    mykonos: path.resolve(__dirname, "src/js/pages/mykonos.js"), // Mykonos
    posts: path.resolve(__dirname, "src/js/pages/posts.js"), // Posts
    team: path.resolve(__dirname, "src/js/pages/team.js"), // About
    contact: path.resolve(__dirname, "src/js/pages/contact.js"), // Contact
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "src/js"),
  },
  watch: true,
};
