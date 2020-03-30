
exports.up = function(knex) {
    return knex.schema.createTable('submissions', function (table) {
        table.increments();
        table.string('problem_id').notNullable();
        table.string('user_id').notNullable();
        table.string('language').notNullable();
        table.string('response').notNullable();
        table.timestamps(); 
        
        table.foreign('user_id').references('id').inTable('users');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('submissions');
};
