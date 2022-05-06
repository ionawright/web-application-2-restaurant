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

exports.dish_page = function(req, res) {
    res.render('add-dish', {
        'title': 'Add a new dish'
    })
};

exports.post_login_entry = function(req, res) {
    console.log('processing post_login_entry controller');
    if (!req.body.username || req.body.password) {
        response.status(400).send("Entries must have a request.");
        return;
    }
    db.addUsers(req.body.username, req.body.password);
    res.redirect('/');
};
