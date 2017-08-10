var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");
var userModel = mongoose.model("UserModel", userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.updateUser = updateUser;
userModel.findUserByCredentials = findUserByCredentials;
userModel.addWebsite = addWebsite;
userModel.removeWebsite = removeWebsite;

module.exports = userModel;

//remove website with _id of websiteId whose developerId is developerId
function removeWebsite(developerId, websiteId) {
    return userModel
        .findById(developerId)
        .then(function (user) {
            var index = user.websites.indexOf(websiteId);
            user.websites.splice(index, 1);
            return user.save();
        })
}

//add a website with _id and developerId matching the parameters
function addWebsite(developerId, websiteId) {
    return userModel
        .findById(developerId)
        .then(function (user) {
            user.websites.push(websiteId);
            return user.save();
        });
}

//return the user whos credentials match the given parameter(s)
function findUserByCredentials(username, password) {
    return userModel.findOne({username: username, password: password});
}

//update the user to reflect the values of the parmeters
function updateUser(userId, user) {
    //find the user model where _id ===userId and set it as user. then return
    return userModel.update({_id: userId},
        {$set: user});
}

//add a new user matching the parameter
function createUser(user) {
    return userModel.create(user);
}

//retuurn a user with amd ._id matching the parameter
function findUserById(userId) {
    return userModel
        .findById(userId)
        .populate('websites', 'name');
}