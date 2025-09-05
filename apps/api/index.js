const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(4000, () => {
  console.log("API running on port 4000");
});
