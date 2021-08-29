const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();
//  form/... => GET
router.get('/complete-form',(req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}); //allow to use new middleware. Next is a passing function to the next middleware

//  form/... => POST
router.post('/complete-form',(req, res, next) => {
    console.log(req.body);
    res.redirect('/')
}); //allow to use new middleware. Next is a passing function to the next middleware

module.exports = router;