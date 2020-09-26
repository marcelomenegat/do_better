const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors);
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * HTTP Methods
 * GET
 * POST
 * PUT
 * DELETE
 */

 /**
  * Parameters Type
  * 
  * Query Params: Named params send at route after '?' (Filters, pagination) e.g: users?page=2&name=Menegat
  * Route Params: Parameters used to identify resources e.g: /users/:id
  * Request Body:  Body of the request, used to create or update a resource.
  */

  /**
   * SQL: MySQL, SQLite, PostgresSQL, Oracle, MS SQL Server
   * NoSQL: MongoDB, CouchDB, etc  
   * 
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

   /**
    * Entidades: 
    *  ONG
    *  Caso (Incidente)
    */

    /**
    * Funcionalidaes: 
    *  Login de ONG
    *  LogOut de ONG
    *  Cadastro de ONG
    *  Cadastros novos casos
    *  Deletar casos
    *  Listar casos especificos de uma ong
    * 
    * Mobile
    *  Listar todos casos
    *  Entrar em contato com a ONG
    */

    /**
     * Criacao de tabelas Knex
     * 
     * npx knex migrate:make create_ongs
     * npx knex migrate:latest 
     */


