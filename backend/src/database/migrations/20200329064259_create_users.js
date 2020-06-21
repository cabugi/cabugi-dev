
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('id').primary();
        table.integer('score').defaultTo(0);
        table.string('username').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable(); // Hash
        table.string('country').defaultTo('Brasil'); //Possibility for future internationalization. For now, defaulted to Brazil.
        table.string('state').nullable();
        table.string('city').nullable();
        table.string('school_org').nullable(); //It is necessary? If so, nullable or notNullable?
        table.string('birthday').nullable(); //It is necessary? If so, nullable or notNullable?
        table.string('permissions').defaultTo('user');
        table.boolean('contact'); // Permission checkbox to contact their email;
        table.timestamps();
             
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
