
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('id').primary();
        table.string('username').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable(); //Hash
        table.string('pronouns').defaultTo('x'); //Should we default to non-binary in case of not specified? Will we ever use pronouns in future emails?
        table.string('country').defaultTo('Brasil'); //Possibility for future internationalization. For now, defaulted to Brazil.
        table.string('state').notNullable();
        table.string('city').notNullable();
        table.string('school_org'); //It is necessary? If so, nullable or notNullable?
        table.string('birthday'); //It is necessary? If so, nullable or notNullable?
        table.string('permissions').defaultTo('user');
        table.boolean('NOIC').defaultTo(0); //NOIC Collaborators will have special privilleges, their problems would have a tag on them and such. 
        table.boolean('contact'); //Permission checkbox to contact their email;
        table.timestamps();
        
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
