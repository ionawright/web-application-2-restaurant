const nedb = require('nedb');

class Restaurant {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({ filename: dbFilePath, autoload: true });
        } else {
            this.db = new nedb();
        }
    }
    init() {
        this.db.insert({
                name: "Smoked Salmon",
                description: "Smoked salmon, buttermilk dressing, pickled radish & apple, wild garlic oil.",
                allergies: ["Vegan"],
                ingredients: ["Salmon", "Butter", "pickles", "radish", "apple", "garlic oil"],
                price: 7.99,
                special: 'No',
                type: 'lunch'
        });
        console.log("dish 1 inserted into DB")
        this.db.insert({
                name: "Roast breast of chicken",
                description: "Salt & pepper greens, smoked butter mash, Caramelised shallot, red wine jus.",
                allergies: [],
                ingredients: [],
                price: 16.95,
                special: 'No',
                type: 'dinner'
        });
        console.log("dish 2 inserted into DB")
        this.db.insert({
                name: "White chocolate and raspberry cheesecake",
                description: "Creme cheese topping with white chocolate.",
                type: 'dinner',
                price: 6.95,
                special: 'No',
                ingredients: [],
                allergies: []
        });
        console.log("dish 3 inserted into DB")
        this.db.insert({
            name: "Farmhouse Salad",
            description: "Our famous house salad that is filled with our fresh, home grown vegetables and fruits.",
            allergies: ["Vegeterian"],
            ingredients: ["Lettuce", "Spinach", "Rocket", "radish", "apple", "sesames"],
            price: 7.99,
            special: 'Yes',
            type: 'lunch'
        });
        console.log("dish 4 inserted into DB")
        this.db.insert({
                name: "Pesto pasta",
                description: "Creamy red pesto penne pasta with tomato, garlic, peppers and rocket. Topped with cheese",
                allergies: ["Contains nuts", "Vegeterian"],
                ingredients: ["pesto", "pine nuts", "peppers", "cream"],
                price: 12.95,
                special: 'No',
                type: 'dinner'
        });
        console.log("dish 5 inserted into DB")
        this.db.insert({
                name: "Tomato Soup",
                description: "Creamy tomato soup with chorizo and roasted red peppers",
                type: 'lunch',
                price: 6.95,
                special: 'No',
                ingredients: ["tomato", "chorizo", "peppers"],
                allergies: []
        });
        console.log("dish 6 inserted into DB")
    };

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
    };

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
     };

    getEntry(id) {
        return new Promise((resolve, reject) => {
            this.db.find({ _id: id }, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                    console.log('Get entry: ', data);
                }
            })
        })
    };

    getAllEntries() {
        return new Promise((resolve, reject) => {
            this.db.find({}, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                    console.log('Get all entries: ', data);
                }
            })
        })
    };

    deleteEntry(id) {
        this.db.remove(id, function(req, data) {
            if (err) {
                console.log("Error deleting", id);
            } else {
                console.log('Success in deleting', data)
            }
        })
    };
};

module.exports = Restaurant;
