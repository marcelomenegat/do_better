
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
        console.info("start 2 create table ongs")
          table.string('id').primary();
          table.string('name').notNullable();
          table.string('email').notNullable();
          table.string('whatsapp').notNullable();
          table.string('city').notNullable();
          table.string('uf', 2).notNullable();
          console.info("finishing create table ongs")
      });
};

exports.down = function(knex) {
    console.error("DROP 2 table ongs")
    return knex.schema.dropTable('ongs');
};
