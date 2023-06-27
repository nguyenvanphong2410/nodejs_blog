const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../ultil/mongoose')

class SiteController {

    // [GET] /news
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('home', {
                    // Handlerbar phiên bản mới nên phải viết như bên dưới
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }

    //[GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
