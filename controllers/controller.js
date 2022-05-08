// determines what response to send back to a user when a user makes a browser request.
const restaurantDAO = require('../models/model');
const db = new restaurantDAO();

// const { redirect } = require("express/lib/response");

db.init();

exports.about_page = function(req, res) {
    res.render('about', {
        'title': 'About Us',
    })
};

exports.lunch_page = function(req, res) {
    db.getAllEntries()
        .then((list) => {
            res.render('menu-lunch', {
                'title': 'Lunch Menu',
                'menuLunch': list
            });
            console.log('promise resolved');
        })
        .catch((err) => {
            console.log('promise rejected', err);
        })
};

exports.dinner_page = function(req, res) {
    db.getAllEntries()
        .then((list) => {
            res.render('menu-dinner', {
                'title': 'Dinner Menu',
                'menuDinner': list
            });
            console.log('promise resolved');
        })
        .catch((err) => {
            console.log('promise rejected', err);
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

// exports.show_login = function (req, res) {
//     res.render("user/login");
//   };
  
//   exports.handle_login = function (req, res) {
//     // res.redirect("/new");
//     res.render("newEntry", {
//       title: "Guest Book",
//       user: "user"
//     });
//   };

// exports.show_register_page = function (req, res) {
//     res.render("user/register");
//   };
  
//   exports.post_new_user = function (req, res) {
//     const user = req.body.username;
//     const password = req.body.pass;
  
//     if (!user || !password) {
//       res.send(401, "no user or no password");
//       return;
//     }
//     userDao.lookup(user, function (err, u) {
//       if (u) {
//         res.send(401, "User exists:", user);
//         return;
//       }
//       userDao.create(user, password);
//       console.log("register user", user, "password", password);
//       res.redirect("/login");
//     });
//   };
  
//   exports.loggedIn_landing = function (req, res) {
//     db.getAllEntries()
//       .then((list) => {
//         res.render("entries", {
//           title: "Guest Book",
//           user: "user",
//           entries: list,
//         });
//       })
//       .catch((err) => {
//         console.log("promise rejected", err);
//       });
//   };
  
//   exports.logout = function (req, res) {
//     res.clearCookie("jwt").status(200).redirect("/");
//   };
  

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
};

exports.edit_dish_page = function(req, res) {
    console.log('processing get entry controller ', req.body._id);
    db.getEntry(req.body._id)
        .then((entry) => {
            res.render('edit-dish', {
                'title': 'Edit Dish',
                'dish': entry
            });
            console.log('promise resolved');
        })
        .catch((err) => {
            console.log('promise rejected', err);
        })
};

exports.delete_dish = function(req, res) {
    console.log('processing delete controller');
    if (!req.body._id) {
        response.status(404).send("Not found - must have an ID");
        return;
    }
    db.deleteEntry(req.body._id)
    res.redirect('/admin')
};