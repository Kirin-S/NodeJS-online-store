var express = require('express');

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = express.json();

var router = express.Router();

const mysql = require('mysql2');

const connectoin = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "my",
    password: ""
});

connectoin.connect(function(err){
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log("Database ------ OK");
    }
});

// Вывод всех катгорий
router.get('/', function(req, res){ 
    connectoin.query("SELECT * FROM categories", function(err, result, fields){
        if (err) {
            console.log("Ошибки: " + err);
        }
        else {
            res.render('categories', {data: result});
        }
    });
});

// Форма добавления категории
router.get('/new', function(req, res){
    console.log("file "+__dirname + "/new.html");
    res.sendFile(__dirname + "/new.html");
});

// Вывод товара
router.get('/categories/:id', function(req, res){
    sql = "SELECT title, id FROM items WHERE items.id = ?";
    filter = [req.params.id];
    connectoin.query(sql, filter, function(err, result, fields){
        if (err) {
            console.log("Ошибки: " + err);
        }
        else {
            sql = "SELECT * FROM categories";
            connectoin.query(sql, function(err, result1, fields){
                res.render('showCateg', {data: result, categ: result1});
            });
        }
    });
});

// Добавление категории
router.post('/', urlencodedParser, function(req, res){ 
    sql="INSERT INTO categories (title) values (?)";
    filter=[req.body.title];
    connectoin.query(sql, filter, function(err, result, fields){
        res.redirect("categories");
    });
});

// Изменение категории
router.put('/:id', jsonParser, function(req, res){
    sql="UPDATE categories SET title = ? WHERE title_id = ?";
    filter = [req.body.title, req.body.id];
    connectoin.query(sql, filter, function(err, result, fields){
        res.send('Данные обновлены');
    });
});

// Удаление категории
router.delete('/', jsonParser, function(req, res){
    sql = "SELECT * FROM items WHERE id = ?" ;
    filter = [req.body.id];
    connectoin.query(sql, filter, function(err, result, fields){
        if (result.length > 0) {
            res.send('Нельзя удалить отдел!');
        }
        else {
            sql = "DELETE FROM categories WHERE title_id = ?";
            filter = [req.body.id];
            connectoin.query(sql, filter, function(err, result, fields){
                res.send("Удалено");
            });
        }
    });
});

module.exports = router;