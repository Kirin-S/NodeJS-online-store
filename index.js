// Программа изпользует таблицы phpMyAdmin

const express = require('express');
const index = require('./routes/index');
const categories = require('./routes/categories');
const reg = require('./routes/reg_form');
const userPage = require('./routes/userPage');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use('/', index);
app.use('/admin', categories);
app.use('/reg', reg);
app.use('/userPage', userPage);

app.listen(3000);