const newsRouter = require('./news');
const sitRouter = require('./site');

function route(app) {

    app.use('/news', newsRouter);
    app.use('/', sitRouter);
    
}

module.exports = route;
