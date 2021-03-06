const express = require('express');
const router = express.Router();
const BookController = require('../http/controller/book-controller');
const check = require('../http/middlerware');
const IdSearchCondition = require('../src/search-services/id-search-condition');
let bookController = new BookController();

/* GET home page. */
router.get('/book/save',function (req, res) {
    res.render('save.njk', {books:''})
});

router.get('/book/save/:id', check.searchCondition, bookController.save);

router.get('/books', check.searchCondition, bookController.search);

router.get('/book/:id', function (request, response, next) {
    request.condition = new IdSearchCondition(request.params.id);
    next();
}, bookController.detail);

router.post('/book', check.bookRequest, check.checkNull, check.checkLength, bookController.createBook);

router.put('/book/:id', check.bookRequest, check.checkNull, check.checkLength, bookController.editBook);

router.delete('/book/delete/:id', bookController.deleteBook);

router.get('/search-advance', check.searchCondition, bookController.search);

router.get('/search-basic', check.searchCondition, bookController.search);

module.exports = router;
