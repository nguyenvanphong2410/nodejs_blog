const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../ultil/mongoose')

class MeController {

    //[GET] /stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController();
