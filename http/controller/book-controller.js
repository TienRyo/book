class BookController {

    constructor() {

    }

    createBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.add(request.book).then(function (result) {
            response.render('home.njk', {books :result})
        }).catch(function (err) {
            next(err);
        });
    }

    deleteBook(request, response) {
        let repo = request.app.get('books.repo');
        repo.remove(request.params.id).then(function () {
            response.status(200).render('index');
        });
    }

    editBook(request, response) {
        let repo = request.app.get('books.repo');
        repo.edit(request.book).then(function () {
            response.status(200).json({message:'Success'});
        });
    }

    save(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then(book => response.render('save.njk', {book:book[0]}))
            .catch(next)
    }
    search(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then(books => response.render('home.njk', {books:books}))
            .catch(next)
    }
    detail(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then(book => response.render('detail.njk', {book:book[0]}))
            .catch(next)
    }
}

module.exports = BookController;