const express = require('express');
const auth = require("./auth_manual");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('dotenv').config({ path: './.env' });

const router = express.Router();

router.use(cookieParser());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function(req, res){
    res.render('reg_form.ejs');
});

// ------- api ---------
router.post('/auth', (req, res) => {
    const auth_data = auth.getUserAuth(req.body.login, req.body.password);
    console.log(auth_data);

    if (auth_data !== null){
        res.status(200).send({
            logged: true,
            userData: auth_data
        });
        return;
    }

    res.status(403).send({
        logged: false,
        message: "User credentials is invalid!"
    })
});

router.post('/reg', (req, res) => {
    const auth_data = auth.regUserAuth(req.body.login, req.body.password);
    console.log(auth_data);

    if (auth_data !== null){
        res.status(200).send({
            regged: true,
            userData: auth_data
        });
        return;
    }

    res.status(403).send({
        regged: false,
        message: "Registration error"
    })
});

router.post('/checkToken', (req, res) => {
    // check valid JWT token in headers
    console.log(req.headers.authorization);
    if (req.headers.authorization && auth.checkJWT(req.headers.authorization.replace('Bearer ','')))
    {
        res.status(200).send({
            message: 1
        })
        return;
    }
    // Redirect because user not logged
    res.status(403).send({
        message: "no"+req.headers.authorization
    });
});

module.exports = router;