const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    global: path.resolve(__dirname, "src/js/index.js"), // Global
    home: path.resolve(__dirname, "src/js/pages/home.js"), // Home
    posts: path.resolve(__dirname, "src/js/pages/posts.js"), // Posts
    about: path.resolve(__dirname, "src/js/pages/about.js"), // About
    contact: path.resolve(__dirname, "src/js/pages/contact.js"), // Contact
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "src/js"),
  },
  watch: true,
};
