// Vercel Serverless Function: keep the DeepSeek API key on the server.
// Add DEEPSEEK_API_KEY in Vercel Project Settings > Environment Variables.
module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  if (!process.env.DEEPSEEK_API_KEY) {
    return res.status(500).json({ error: "DEEPSEEK_API_KEY is not configured" });
  }

  try {
    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.DEEPSEEK_API_KEY
      },
      body: JSON.stringify(req.body || {})
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      data = { error: text.slice(0, 500) };
    }

    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message || "Proxy request failed" });
  }
};
