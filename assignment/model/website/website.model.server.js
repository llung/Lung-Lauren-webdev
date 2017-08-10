var mongoose = require("mongoose");
var websiteSchema = require("./website.schema.server");
var websiteModel = mongoose.model("WebsiteModel", websiteSchema);
var userModel = require("../user/user.model.server");

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsitesForUser = findWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;

//remove the website matching the parameters
function deleteWebsite(developerId, websiteId) {
    return websiteModel
        .remove({_id: websiteId})
        .then(function (status) {
            return userModel.removeWebsite(developerId, websiteId)
        });
}

//find the website that matched the websiteId parameter
function findWebsiteById(websiteId) {
    return websiteModel.findById(websiteId);
}

//find all the users that have the user's id as a developerId
function findWebsitesForUser(developerId) {
    return websiteModel
        .find({developer: developerId})
        .populate('developer', 'username')
        .exec();
}

//add a website that has the information in 'website' and the given developerId
function createWebsite(developerId, website) {
    website.developer = developerId;
    var websiteTmp = null;
    return websiteModel
        .create(website)
        .then(function (websiteDoc) {
            websiteTmp = websiteDoc;
            return userModel.addWebsite(developerId, websiteDoc._id)
        })
        .then(function (userDoc) {
            return websiteTmp;
        })
}