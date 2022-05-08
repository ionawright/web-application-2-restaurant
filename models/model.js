const nedb = require('nedb');

class Restaurant {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.db = new nedb();
        }
    }
    init() {
        // this.db.insert({
        //     user: {
        //         username: "admin",
        //         password:  "password"
        //     }
        // })
        this.db.insert({
                name: "Smoked Salmon",
                description: "Smoked salmon, buttermilk dressing, pickled radish & apple, wild garlic oil.",
                allergies: ["Vegan"],
                ingredients: ["Salmon", "Butter", "pickles", "radish", "apple", "garlic oil"],
                price: 7.99,
                special: 'No',
                type: 'lunch'
        });
        console.log("Lunch inserted into DB")
        this.db.insert({
                name: "Roast breast of chicken",
                description: "Salt & pepper greens, smoked butter mash, Caramelised shallot, red wine jus.",
                allergies: [],
                ingredients: [],
                price: 16.95,
                special: 'No',
                type: 'dinner'
        });
        console.log("Dinner inserted into DB")
        this.db.insert({
                name: "White chocolate and raspberry cheesecake",
                description: "Creme cheese topping with white chocolate.",
                type: 'dinner',
                price: 6.95,
                special: 'No',
                ingredients: [],
                allergies: []
        });
        console.log("Dessert inserted into DB")
        
    }
    getData() {
        return new Promise((resolve, reject) => {
            this.db.find({}, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                    console.log(data);
                }
            })
        })
    }

    // addUsers(username, password) {
    //     var entry = {
    //             username: username,
    //             password: password,
    //     }
    //     console.log('user created', entry);
    //     this.db.insert(entry, function(err, user) {
    //             if (err) {
    //                 console.log('Error inserting user', subject);
    //                 } else {
    //                 console.log('user inserted into the database', user);
    //             }
    //     }) 
    //  } 

    addEntry(name, description, type, price, special, ingredients, allergies) {
        var entry = {
                name: name,
                description: description,
                type: type,
                price: price,
                special: special,
                ingredients: ingredients,
                allergies: allergies
        }
        console.log('entry created', entry);
        this.db.insert(entry, function(err, data) {
                if (err) {
                    console.log('Error inserting data', name);
                } else {
                    console.log('Success - data inserted into the database', data);
                }
        }) 
     }  

     getAllEntries() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for error, entries for data
            this.db.find({}, function(err, dishes) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                //if no error resolve the promise & return the data
                } else {
                    resolve(dishes);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', dishes);
                }
            })
        })
    }
};

module.exports = Restaurant;
