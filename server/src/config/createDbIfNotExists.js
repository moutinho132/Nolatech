const { createConnection } = require('typeorm');
const { ConfigService, ConfigModule } = require('@nestjs/config');


async function createDbIfNotExists() {
    
    ConfigModule.forRoot({
        envFilePath: `.${process.env.NODE_ENV.trim()}`,
      });
      
      const configService = new ConfigService();
    try {
        
        const databaseName = configService.get('DB_NAME');        
        const connectionOptions = {
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USER'),
            password: configService.get('DB_PASSWORD'),
            database: 'postgres', 
        };

        const connection = await createConnection(connectionOptions);
        const result = await connection.query(`SELECT 1 FROM pg_database WHERE datname = '${databaseName}'`);
        if (result.length === 0) {            
            await connection.query(`CREATE DATABASE ${databaseName}`);
            console.log('Database created.');
        } else {
            console.log('Database already exists.');
        }        
        await connection.close();
    } catch (error) {
        console.error('Error creating or connecting to database:', error);
    }
}
createDbIfNotExists().then(() => {
    console.log('Database check completed.');
}).catch(error => {
    console.error('Error checking database:', error);
});
