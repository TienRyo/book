const express        = require('express');
const path           = require('path');
//const favicon        = require('serve-favicon');
const logger         = require('morgan');
const cookieParser   = require('cookie-parser');
const bodyParser     = require('body-parser');
const BookRepository = require('./src/book/book-repository');
const connection     = require('./database/connection');
const BookFactory    = require('./src/book/book-factory');
const Searcher       = require('./src/search-services/searcher');

const index = require('./routes/index');

const app   = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.set('books.repo', new BookRepository(connection));

app.set('book.searcher', new Searcher(connection, new BookFactory()));

app.use('/', index);

module.exports = app;
