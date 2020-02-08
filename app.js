const express = require("express");
const app = express();

app.get("/", () => {
  console.log("may");
});

app.listen(3000, () => {
  console.log(3000);
});
