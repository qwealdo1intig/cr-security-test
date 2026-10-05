const express = require("express");
const app = express();

app.get("/", (req, res) => {
    const userInput = req.query.cmd;
    eval(userInput); // Intentionally vulnerable
    res.send("ok");
});

app.listen(3000);
