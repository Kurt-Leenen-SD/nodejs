const express = require("express");
const app = express();
const port = 3000;
const link = `http://localhost:${port}/`;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/random", (req, res) => {
    res.send(""+rand(10,200));
});

app.listen(port, () => {
    console.log(`example app listening on port ${port}, get there by this link ${link}`);
})

function rand(min, max){
    let r = Math.random() * (max-min) + min;
    return r;
}