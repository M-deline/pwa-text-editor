const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/src-sw.js', express.static(path.join(__dirname, '../client/src-sw.js')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./routes/htmlRoutes.js')(app);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/favicon.ico'));
});