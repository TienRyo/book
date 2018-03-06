
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: 'Dinh Menh ', author: 'tac gia 1', publisher_id: 1, price: 12000},
        {title: 'Cho Ta', author: 'tac gia 2', publisher_id: 2, price: 12000},
        {title: 'Gap Nhau', author: 'tac gia 3', publisher_id: 1, price: 12000},
        {title: 'Hoa Lan', author: 'tac gia 3', publisher_id: 2, price: 12000},
        {title: 'Hoa Dao', author: 'tac gia 4', publisher_id: 1, price: 12000}
      ]);
    });
};
