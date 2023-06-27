const Course = require('../models/Course');

class SiteController {
    // [GET] /news
    index(req, res) {

        // Course.findOne({}, function (err, courses) {
        //     if (!err) res.json(courses);
        //     res.status(400).json({ error: 'ERROR' });
        // })

        // Từ phiên bản mới v7 thì Mn nhớ thay thế tránh bị lỗi, 
        //do find không còn hỗ trợ callback(chỉ còn promise và async/await) nhé. 
        //*Với Promise Course.find({}) .then(courses => res.json(courses)) .catch(err => res.status(400).json({ error: 'ERROR' }));
        Course.find({})
            .then(courses => res.json(courses))
            .catch(err => res.status(400).json({ error: 'ERROR' }));
        // res.render('home');
    }

    //[GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
