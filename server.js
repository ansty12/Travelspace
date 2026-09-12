const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "TravelSpace API fonctionne correctement."
  });
});

app.listen(PORT, () => {
  console.log(`TravelSpace démarré sur le port ${PORT}`);
});
