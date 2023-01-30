import http from 'http';
import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = express();

const port = 3000;

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Date: Date.now()
});
res.sendFile(path.join(__dirname, "index.html"));
});

http.createServer(app).listen(port, () => {
  console.log(`app listening at ${port}`);
});