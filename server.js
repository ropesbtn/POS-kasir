import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// path ke folder dist hasil build vite
const distPath = path.join(__dirname, "dist");

app.use(express.static(distPath));

// fallback ke index.html untuk routing React
app.use((req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`🌐 Akses dari jaringan: http://<IP_PC>:${PORT}`);
});
