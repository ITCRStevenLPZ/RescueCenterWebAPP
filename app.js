const express = require('express');

const path = require('path');

const app = express();

const adminRoutes =  require('./routes/admin');

const formRoutes =  require('./routes/form');

const rootRoutes =  require('./routes/root');

app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname,'public')));

app.use(rootRoutes);

app.use('/admin', adminRoutes);

app.use('/form', formRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views', 'not-found.html'));
})

app.listen(3000);
