const express = require('express');

const router = express.Router();

router.get('/', function(req, res){
    res.sendFile('C:/Users/OverMind/Desktop/NodeJS/views/userPage.html');
});

module.exports = router;