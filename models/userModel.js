const Datastore = require("nedb");
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UserDAO {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new Datastore({ filename: dbFilePath, autoload: true });
        } else {
            this.db = new Datastore();
        }
    }
    init() {
        this.db.insert({
            user: 'admin',
            password: 'password'
        });
        console.log("Admin user inserted");
        this.db.insert({
            user: 'user',
            password: 'password'
        });
        console.log("User inserted");
        return this;
    };

    createUser(username, password) {
        var entry = {
            user: username,
            password: password,
        };
        console.log("user created", entry)
        this.db.insert(entry, function (err, data) {
            if (err) {
                console.log("Can't insert user: ", data);
            } else {
                console.log('Success - user inserted', data)
            }
        });
    };

    lookup(user, cb) {
        this.db.find({'user': user}, function (err, entries) {
        if (err) {
            return cb(null, null);
        } else {
            if (entries.length == 0) {
                return cb(null, null);
            }
                return cb(null, entries[0]);
            }
        });
    }
};

const dao = new UserDAO();
dao.init();

module.exports = dao;