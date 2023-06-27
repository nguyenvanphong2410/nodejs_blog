//Lấy vào model
const Course = require('../models/Course');

const { mongooseToObject } = require('../../ultil/mongoose')

class CourseController {

    //[GET] /courses/:slug
    show(req, res, next) {
        // res.send('COURSE DETAIL' + req.params.slug);
        Course.findOne({slug: req.params.slug})
            .then((course) => {
                res.render('courses/show', {
                   course: mongooseToObject(course)
                });
            })
            .catch(next)
    }
}

module.exports = new CourseController();
