class BookController {

    constructor() {

    }

    createBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.add(request.book).then(function (result) {
            response.json(result.toJson())
        }).catch(function (err) {
            next(err);
        });
    }

    deleteBook(request, response) {
        let repo = request.app.get('books.repo');
        repo.remove(request.params.id).then(function () {
            response.status(200).json({message:'Success'});
        });
    }

    editBook(request, response) {
        let repo = request.app.get('books.repo');
        repo.edit(request.book).then(function () {
            response.status(200).json({message:'Success'});
        });
    }

    search(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then(books => response.json(books.map(result => result.toJson())))
            .catch(next)
    }
}

module.exports = BookController;