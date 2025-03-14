
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

var user = {
    name: "mouaiz",
    age: 15,
    con: ["algerai", 'hamam righa'],
    study: "1s",
    work: "frint-end devloper and study back end"
}
mongoose
// get data
app.get("/", (req, res) => {
    res.json(user)

})


app.use(express.json())


app.listen(PORT, () => {
    console.log(`🚀 الخادم يعمل على http://localhost:${PORT}`);
});
