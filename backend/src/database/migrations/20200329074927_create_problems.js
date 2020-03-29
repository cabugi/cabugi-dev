
exports.up = function(knex) {
    return knex.schema.createTable('problems', function (table) {
        table.increments();
        table.string('user_id').notNullable(); //Mod that created the problem.
        table.string('test_cases').notNullable();
        table.string('time_limit').notNullable();
        table.string('runtime').notNullable();
        table.string('challenge_rating').notNullable();
        table.boolean('from_NOIC').notNullable();
        table.timestamps(); 
        
        table.foreign('user_id').references('id').inTable('users');
        table.foreign('from_NOIC').references('NOIC').inTable('users');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('problems');
};
