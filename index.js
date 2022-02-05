const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/datum", (req, res) => {
    res.send(`Szerveroldai dátum: ${new Date().toLocaleDateString("hu")}`);
});

app.listen(process.env.PORT);