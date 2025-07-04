// server.js
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const CLIENT_ID = "Ov23liu5V7A6nBkrG9Yd";
const CLIENT_SECRET = "e0d0bd72dfb2ea28c1b6c6a298949fbe4ae0d136";

app.get("/oauth/callback", async (req, res) => {
  const { code } = req.query;

  const tokenRes = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    },
    {
      headers: { Accept: "application/json" },
    }
  );

  const access_token = tokenRes.data.access_token;
  res.send(`<script>
    window.opener.postMessage(${JSON.stringify(access_token)}, "*");
    window.close();
  </script>`);
});

app.listen(3001, () => {
  console.log("OAuth server running on http://localhost:3001");
});
