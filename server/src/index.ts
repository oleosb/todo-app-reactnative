import express from "express";

// create a server
const app = express();

app.post("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// listen to some port
app.listen(8000, () => {
  console.log("Listening");
});
