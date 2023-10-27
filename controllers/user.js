
const userModel = require('../model/user.js');
const db = require("../database.js")

const {validateUserName, validateUserAge} = require("../utils/validate.js")

exports.getAllUser = async (req, res) => {
    // Return all users
    userModel.getAllUser().then(
        (result) => { 
            res.json({
                "message":"success",
                "data":result
            })
        },
        (error) => { 
            res.status(400).json({"error":error.message});
        }
    );
    
}

exports.getUserByID = (req, res) => {
    // Find user with given ID, if not found 404
    userModel.getUserByID(parseInt(req.params.id)).then(
        (result) => { 
            res.json({
                "message":"success",
                "data":result
            })
        },
        (error) => { 
            res.status(404).json({"error":error.message});
        }
    );
}

exports.createUser = (req, res) => {
    var errors=[]
    var name = req.body.name;
    var age = parseInt(req.body.age);
    // Validate user name
    if (!validateUserName(name)) {
        errors.push("Name is required and must be at least 1 character.");
    }
    // Validate user age
    if (!validateUserAge(age)) {
        errors.push("Age must be larger than 0.");
    }

    if (errors.length){
        return res.status(404).send({"error":errors.join(", ")})
    }

    // Pass validate, add new user to database
    userModel.createUser(name, age).then(
        (result) => { 
            res.json({
                "message":"success",
                "data":result
            })
        },
        (error) => { 
            res.status(404).json({"error":error.message});
        }
    );
}

exports.editUserFull = (req, res) => {
    var errors=[]
    var id = parseInt(req.params.id)
    var name = req.body.name;
    var age = parseInt(req.body.age);
    // Validate user name
    if (!validateUserName(name)) {
        errors.push("Name is required and must be at least 1 character.");
    }
    // Validate user age
    if (!validateUserAge(age)) {
        errors.push("Age must be larger than 0.");
    }

    if (errors.length){
        return res.status(404).send({"error":errors.join(", ")})
    }

    // Pass validate, add new user to database
    userModel.editUserFull(id, name, age).then(
        (result) => { 
            res.json({
                "message":"success",
                "data":result
            })
        },
        (error) => { 
            res.status(404).json({"error":error.message});
        }
    );
}

exports.editUser = (req, res) => {
    var errors=[]
    var id = parseInt(req.params.id)
    var name = req.body.name;
    var age = parseInt(req.body.age);

    // Update user
    if (name) {
        // Validate user name
        if (!validateUserName(name)) {
            errors.push("Name is required and must be at least 1 character.");
        }
    }
    if (age) {
        // Validate user age
        if (!validateUserAge(age)) {
            errors.push("Age must be larger than 0.");
        }
    }

    if (errors.length){
        return res.status(404).send({"error":errors.join(", ")})
    }

    // Pass validate, add new user to database
    userModel.editUser(id, name, parseInt(age)).then(
        (result) => { 
            res.json({
                "message":"success",
                "data":result
            })
        },
        (error) => { 
            res.status(404).json({"error":error.message});
        }
    );
}

exports.deleteUser = (req, res) => {
    var id = parseInt(req.params.id)
    userModel.deleteUser(id).then(
        (result) => {  
            res.json({
                "message":"success",
                "data":result
            })
        },
        (error) => { 
            res.status(404).json({"error":error.message});
        }
    );
}