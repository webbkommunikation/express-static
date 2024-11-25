const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/greeting", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Posted message");
});

app.listen(3000, () => {
  console.log("Server is running.");
});
