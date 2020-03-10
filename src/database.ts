import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'bw6i6alkiruw9dbxot9x-mysql.services.clever-cloud.com',
        user: 'u9tqmdg6pbnjm5qq',
        password: '7UgOmzLf8b0wg4ypDsOB',
        database: 'bw6i6alkiruw9dbxot9x',
        connectionLimit: 10,
        port: 3306
    });
    return connection;
}