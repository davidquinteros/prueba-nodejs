import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({uri: 'mysql://b6633ed7b9322e:2084b63f@us-cdbr-east-05.cleardb.net/heroku_c15972f22ac9d85?reconnect=true'});
    return connection;
}

/*'mysql://b6633ed7b9322e:2084b63f@us-cdbr-east-05.cleardb.net/heroku_c15972f22ac9d85?reconnect=true'
{
        host: 'us-cdbr-east-05.cleardb.net',
        user: 'b6633ed7b9322e',
        password: '213110725sc',
        database: 'heroku_c15972f22ac9d85',
        connectionLimit: 10,
        port: 3306
    }
*/ 