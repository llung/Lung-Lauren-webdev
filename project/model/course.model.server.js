var mongoose = require("mongoose");
var courseSchema = require("./course.schema.server");
var courseModel = mongoose.model("CourseModel", courseSchema);


courseModel.createCourse = createCourse;
courseModel.getCourseById = getCourseById;
courseModel.deleteCourse = deleteCourse;
courseModel.getStudentsByCourseId = getStudentsByCourseId;
courseModel.getAllCourse = getAllCourse;
courseModel.updateCourse = updateCourse;
courseModel.addStudent = addStudent;
courseModel.removeStudent = removeStudent;

module.exports = courseModel;

function addStudent(courseId, user) {
    return courseModel
        .findById(courseId)
        .then(function (course) {
            course.students.push(user);
            return course.save();
        });
}

function getCourseById(courseId) {
    return courseModel.findOne({_id: courseId});
}

function updateCourse(courseId, course) {
    return courseModel.update({_id: courseId},
        {$set: course});
}

function getStudentsByCourseId(courseId) {
    var courses = courseModel.findById(courseId);
    return courses.students;
}

function createCourse(course) {
    return courseModel.create(course);
}

function getAllCourse() {
    return courseModel.courses
}

function deleteCourse(courseId) {
    return courseModel
        .remove({_id: courseId})
}

function removeStudent(courseId, userId) {
    return courseModel
        .findById(courseId)
        .then(function (course) {
            course.students.remove({_id: userId});
            return course.save();
        });
}