
exports.up = function(knex) {
    return knex.schema.createTable('problems', function (table) {
        table.increments();
        table.string('user_id').notNullable(); // Mod that created the problem.
        table.string('title').notNullable();
        table.foreign('user_id').references('id').inTable('users')
        table.timestamps(); 
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('problems');
};
