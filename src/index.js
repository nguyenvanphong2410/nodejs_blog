const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes');

const db = require('./config/db');
//connect to DB
db.connect();

//use
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

//Dùng để sử dụng phương thức khác
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            // Dòng này xử lí số thứ tự của danh sách khóa học của tôi
            sum: (a, b) => a + b,
        }
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init (khởi tạo)routes() ;
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
