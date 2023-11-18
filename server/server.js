const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.static('../client/dist'));
// app.use('/src-sw.js', express.static(path.join(__dirname, '../../client/dist/src-sw.js')));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/src-sw.js', express.static(path.join(__dirname, '../client/src-sw.js')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./routes/htmlRoutes.js')(app);
// require('./routes/htmlRoutes')(app);
// express.static();
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

