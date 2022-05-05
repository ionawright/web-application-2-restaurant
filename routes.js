const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

router.get('/about', controller.about_page);
router.get('/contact', controller.contact_page);
router.get('/news', controller.news_page);
router.get('/menu-lunch', controller.lunch_page);
router.get('/menu-dinner', controller.dinner_page);


router.get('/login', controller.login_page);
// router.post('/add-dish', controller.post_new_entry);
// router.post('/edit-dish');
// router.post('/add-blog-post');
// router.post('/edit-blog-post');


// router.get('/json', controller.show_json);  

router.use(function(req, res) {
        res.status(404);
        res.type('text/plain');
        res.send('404 Not Found.');
    });

router.use(function(err, req, res, next) {
        res.status(500);
        res.type('text/plain');
        res.send('Internal Server Error.');
    });

module.exports = router;