// determines what response to send back to a user when a user makes a browser request.
const restaurantDAO = require('../models/model');
const db = new restaurantDAO();

const { redirect } = require("express/lib/response");

db.init();

exports.about_page = function(req, res) {
    res.render('about', {
        'title': 'About Us',
    })
};

exports.lunch_page = function(req, res) {
    res.render('menu-lunch', {
        'title': 'Lunch Menu'
    })
};

exports.dinner_page = function(req, res) {
    res.render('menu-dinner', {
        'title': 'Dinner Menu'
    })
};

exports.news_page = function(req, res) {
    res.render('news', {
        'title': 'News'
    })
};

exports.contact_page = function(req, res) {
    res.render('contact', {
        'title': 'Contact Us'
    })
};

exports.login_page = function(req, res) {
    res.render('login', {
        'title': 'Login'
    })
};

// exports.post_login_entry = function(req, res) {
//     console.log('processing post_login_entry controller');
//     if (!req.body.username || req.body.password) {
//         response.status(400).send("Entries must have a request.");
//         return;
//     }
//     db.addUsers(req.body.username, req.body.password);
//     res.redirect('/');
// };

exports.admin_page = function(req, res) {
    db.getAllEntries()
        .then((list) => {
            res.render('admin', {
                'title': 'Admin',
                'admin': list
            });
            console.log('promise resolved');
        })
        .catch((err) => {
            console.log('promise rejected', err);
        })
};

exports.admin_page_json = function(req, res) {
    db.getAllEntries()
        .then((list) => {
            res.send(list);
            console.log(list);
            console.log('json endpoint set up');
        })
        .catch((err) => {
            console.log('promise rejected', err);
        })
}

exports.add_dish_page = function(req, res) {
    res.render('add-dish', {
        'title': 'Add a new dish'
    })
};

exports.post_dish_entry = function(req, res) {
    console.log('processing post_dish_entry controller');
    if (!req.body.name) {
        response.status(400).send("Error - Dish must have name.");
        return;
    }
    db.addEntry(req.body.name, req.body.description, req.body.type, req.body.price, req.body.special, req.body.ingredients, req.body.allergies);
    res.redirect('/admin');
}
