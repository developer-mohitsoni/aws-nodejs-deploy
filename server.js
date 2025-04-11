import express from "express";

const app = express();

const port = process.env.PORT;

app.get("/api/get", (req, res) => {
  res.json({ message: "Hello back to Nodejs" });
});

app.get("/api/get_user_details", (req, res) => {
  res.json({ name: process.env.NAME, age: 30 });
});

app.listen(port, () => {
  console.log("Server is running on port 8000");
});
