const express = require('express');
const { router } = require('./routes/router');

const app = express();
app.use(express.urlencoded({ extended : true}));
app.use(express.json())

app.use("/api/", router);


app.listen(3000, () => {
    console.log("server udah jalan di port 3000");
    }
);