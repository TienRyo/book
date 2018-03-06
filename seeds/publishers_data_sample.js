
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('publishers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('publishers').insert([
        {id: 1, name: 'Shueisha', address: 'Japan', phone:'0189'},
        {id: 2, name: 'China', address: 'TQ', phone:'0189'},
        {id: 3, name: 'China', address: 'TQ', phone:'0189'}
      ]);
    });
};
