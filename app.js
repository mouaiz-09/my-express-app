
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
app.use(express.json())
var user = []

var mouaiz = {
  nam:"moauz",
  age : 55, 
  coun: ['bouira', 'hamm righa']
  
}

// get  home
app.get("/", (req, res) => {
    res.send(mouaiz)

})

app.get("/user", (req, res) => {
    if (user.length === 0) {
        res.status(404).send(`
            <html>
                <body>
                    <h2>No Data Found</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIABjhEHIhqK--1h7fFhi-gimvD8S0spRiPs4qDrEgv2GUI8lzvowyEEs&s=10" alt="No Data">
                </body>
            </html>
        `);
        return;
    }
    res.status(200).send(user);
});



    

app.post("/user", (req, res) => {
    var data = req.body;
    const  finduser = user.find((item) => item.id === data.id && item.name === data.name)
    if (finduser) {
        res.status(400).send("هذا المستخدم موجود بالفعل")
        return;
    }
    user.push(data);
    console.log(data);
    
    res.status(201).send("تم بنجاح")
})

// delet 

  

app.listen(PORT, () => {
    console.log(`🚀 الخادم يعمل على http://localhost:${PORT}`);
});
