import express from "express";

const app = express();

app.get("/api/get", (req, res) => {
  res.json({ message: "Hello back to Nodejs" });
});

app.get("/api/get_user_details", (req, res) => {
  res.json({ name: "John Doe", age: 30 });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
