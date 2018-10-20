const path = require('path');
const express = require('express');
var app = express();

const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.listen(port, () => {
    console.log('starting server on path ' + port);
});
