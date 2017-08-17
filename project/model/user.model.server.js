var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");
var userModel = mongoose.model("UserModel", userSchema);


userModel.createUser = createUser;
userModel.findUserByCredentials = findUserByCredentials;
userModel.removeCourse = removeCourse;
userModel.addCourse = addCourse;
userModel.findUserById = findUserById;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;

module.exports = userModel;

function removeCourse(userId, courseId) {
    return userModel
        .findById(userId)
        .then(function (user) {
            var index = user.courses.indexOf(courseId);
            user.courses.splice(index, 1);
            return user.save();
        })
}

function addCourse(userId, courseId) {
    return userModel
        .findById(userId)
        .then(function (user) {
            user.courses.push(courseId);
            return user.save();
        });
}

function findUserByCredentials(username, password) {
    return userModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
    return userModel.update({_id: userId},
        {$set: user});
}

function createUser(user) {
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel
        .findById(userId)
        //.populate('websites', 'name');
}

function deleteUser(userId) {
    return userModel
        .remove({_id: userId})
}