const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller')
const { login } = require('./auth/auth')
const { verify } = require('./auth/auth')

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

router.get('/about', controller.about_page);
router.get('/contact', controller.contact_page);
router.get('/news', controller.news_page);
router.get('/menu-lunch', controller.lunch_page);
router.get('/menu-dinner', controller.dinner_page);

router.get('/register', controller.show_register_page);
router.post('/register', controller.post_new_user);
router.get('/login', controller.login_page);
router.post('/login', login, controller.handle_login);
router.get("/logout", controller.logout);

router.get('/admin', verify, controller.admin_page);
router.get('/json', controller.admin_page_json);  
router.post('/admin', controller.delete_dish);
router.get('/add-dish', controller.add_dish_page);
router.post('/add-dish', controller.post_dish_entry);
router.get('/edit-dish', controller.edit_dish_page);


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
