const makeRequest = require('../../src/book/book-factory');

module.exports = function (req, res, next) {
   let factory = new makeRequest();
    factory.makeFromRequest(req.body).then(function (book) {
        book.setId(req.params.id);
        req.book = book;
            next();
        });
};



