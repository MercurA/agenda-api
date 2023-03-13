import {Pool, Client} from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'agenda',
    password: 'admin',
    port: 5432,
})
