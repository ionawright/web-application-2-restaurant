// determines what response to send back to a user when a user makes a browser request.
const restaurantDAO = require('../models/model');
const db = new restaurantDAO();

const { redirect } = require("express/lib/response");

 
// db.init();

exports.about_page = function(req, res) {
    res.render('about', {
        'title': 'About Us',
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