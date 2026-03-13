import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple in-memory storage for waitlist and demo requests
// In a real app, this would be a database
const DB_FILE = path.join(process.cwd(), "submissions.json");

// Initialize DB file if it doesn't exist
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({ waitlist: [], demoRequests: [] }, null, 2));
}

function readDb() {
  const data = fs.readFileSync(DB_FILE, "utf-8");
  return JSON.parse(data);
}

function writeDb(data: Record<string, unknown>) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// API routes
app.post("/api/waitlist", (req, res) => {
  const { email, searchesPerMonth, resultsPerMonth } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const db = readDb();
  if (db.waitlist.some((entry: { email: string }) => entry.email === email)) {
    return res.status(400).json({ error: "Email already registered" });
  }

  db.waitlist.push({ 
    email, 
    searchesPerMonth, 
    resultsPerMonth, 
    timestamp: new Date().toISOString() 
  });
  writeDb(db);

  res.json({ success: true, message: "Added to waitlist" });
});

app.post("/api/demo", (req, res) => {
  const { email, name, company } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const db = readDb();
  db.demoRequests.push({ email, name, company, timestamp: new Date().toISOString() });
  writeDb(db);

  res.json({ success: true, message: "Demo requested successfully" });
});

app.get("/api/submissions", (req, res) => {
  // In a real app, this would be protected by authentication
  const db = readDb();
  res.json(db);
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
