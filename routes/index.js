var express = require('express');

var router = express.Router();

const mysql = require('mysql2');

const connectoin = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "my",
    password: ""
});

// Главная страница с категориями товаров
router.get('/', function(req, res) {
    connectoin.query("SELECT * FROM categories", function(err, result, fields){
        if (err) {
            console.log(err);
        }
        else {
            res.render('index', {data: result});
        }
    });
});

// Список товаров определённой категории
router.get('/showItemList/:id', function(req, res){
    sql = "SELECT title, id, price FROM items WHERE items.id = ?";
    filter = [req.params.id];
    connectoin.query(sql, filter, function(err, result, fields){
        if (err) {
            console.log("Ошибки: " + err);
        }
        else {
            sql = "SELECT * FROM categories";
            connectoin.query(sql, function(err, result1, fields){
                res.render('showItemList', {data: result, cat: result1});
            });
        }
    });
});

router.get('/basket', function(req, res){
	res.render('basket');
});

// Вывод товара
router.get('/showItemList/showItem/:id', function(req, res){
    sql = "SELECT * FROM items WHERE items.title = ?";
    filter = [req.params.id];
    connectoin.query(sql, filter, function(err, result, fields){
        if (err) {
            console.log(err);
        }
        else {
            res.render('showItem', {data: result});
        }
    });
});

module.exports = router;