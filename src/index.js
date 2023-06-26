const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

//use
app.use(express.static(path.join(__dirname, 'public')));

//middleware
        app.use(
    express.urlencoded({
        extended: true,
      }),
);

            app.use(express.json());

//Template engine
    app.engine(
    'hbs',
    engine({
        extname: '.hbs',
                }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Routes init (khởi tạo)routes() ;
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
