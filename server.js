const app = require("./app.js");

// Environment configuration
require("dotenv").config();
const PORT = process.env.PORT;

// Port listener
app.listen(PORT, () => {
  console.log(`💻 Listening on port ${PORT}:`);
});