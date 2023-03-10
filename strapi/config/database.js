module.exports = ({ env }) => {
  const connection = {
    connection: {
      client: env('DATABASE_CLIENT', 'mysql'),
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      useNullAsDefault: true,
      debug: env.bool("DATABASE_DEBUG", true),
    },
  }
  console.log('connection', connection)
  return connection
}
