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
// router.post('/login', controller.post_login_entry);

router.get('/admin', controller.admin_page);
router.get('/json', controller.admin_page_json);  

router.get('/add-dish', controller.add_dish_page);
router.post('/add-dish', controller.post_dish_entry);

router.get('/edit-dish', controller.edit_dish_page);
router.post('/edit-dish', controller.post_dish_entry);

router.post('/delete', function(req, res) {
    db.serialize(() => {
        db.run('DELETE FROM emp WHERE id=?', req.body.id, function(err) {
            if (err) {
                res.send("Error deleting");
                return console.error(err.message)
            }
            res.send("Entry deleted successfully");
            console.log("Entry deleted successfully");
        });
    });
});
// router.post('/add-blog-post');
// router.post('/edit-blog-post');


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
