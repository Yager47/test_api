const databaseName = 'simple_api_db';

module.exports = {
  development: {
    client: 'postgresql',
    // connection: 'postgres://localhost:5432/${databaseName}',
    connection: {
        database: 'simple_api_db',
        host: 'localhost',
        port: 5432,
        user: 'timonyager',
        password: '1111'
    },
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  },
  test: {
    client: 'postgresql',
    connection: 'postgres://localhost:5432/${databaseName}_test',
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  }
};
