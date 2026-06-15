import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("API running");
});

app.listen(3001, () => {
  console.log("Express API running on port 3001");
});
