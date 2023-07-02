const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

// Lấy vào Phần mềm trung gian
const SortMiddleware = require('./app/middlewares/SortMiddleware')

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

//Custom middlewares
app.use(SortMiddleware);

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            // Dòng này xử lí số thứ tự của danh sách khóa học của tôi
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';

                const icons = {
                    default: 'oi oi-elevator',
                    desc: 'oi oi-sort-descending',
                    asc: 'oi oi-sort-ascending',
                }

                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc'
                }

                const icon = icons[sortType];
                const type = types[sortType];

                return ` <a href="?_sort&column=${field}&type=${type}">
                <span class="${icon}"></span>
            </a>`
            }
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
