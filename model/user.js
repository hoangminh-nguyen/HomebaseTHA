const db = require("../database.js")

exports.getAllUser = () => {
    return new Promise((resolve, reject) => {
        var sql = "select * from users"
        var params = []
        db.all(sql, params, (err, rows) => { 
            if (err) {
                return reject(err);
            }
            return resolve(rows);
        });
    });    
}

exports.getUserByID = (id) => {
    return new Promise((resolve, reject) => {
        var sql = "select * from users where id = ?"
        var params = [id]
        db.get(sql, params, (err, row) => { 
            if (err) {
                return reject(err);
            }
            return resolve(row);
        });
    });  
}

exports.createUser = (name, age) => {
    return new Promise((resolve, reject) => {
        var sql = "insert into users (name, age) values (?, ?)"
        var params = [name, age]
        db.run(sql, params, function(err) { 
            if (err) {
                return reject(err);
            }
            var data = {
                id: this.lastID,
                name: name,
                age: age
            }
            return resolve(data);
        });
    });
}

exports.editUserFull = (id, name, age) => {
    return new Promise((resolve, reject) => {
        var sql = "update users set name = ?, age = ?  where id = ?"
        var params = [name, age, id]
        db.run(sql, params, function(err) { 
            if (err) {
                return reject(err);
            }
            var data = {
                id: id,
                name: name,
                age: age
            }
            return resolve(data);
        });
    });
}

exports.editUser = (id, name, age) => {
    return new Promise((resolve, reject) => {
        var sql = "update users set name = COALESCE(?, name), age = COALESCE(?,age) where id = ?"
        var params = [name, age, id]
        db.run(sql, params, function(err) { 
            if (err) {
                return reject(err);
            }
            var data = {
                id: id,
                name: name,
                age: age
            }
            return resolve(data);
        });
    });
}

exports.deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        var sql = "delete from users where id = ?"
        var params = [id]
        db.run(sql, params, function(err) { 
            if (err) {
                return reject(err);
            }
            var data = {
                id: id
            }
            return resolve(data);
        });
    });
}