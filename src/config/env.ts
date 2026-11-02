import dotenv from 'dotenv';

dotenv.config();

type NodeEnv = 'development' | 'production';
const nodeEnv: NodeEnv = 
    process.env.NODE_ENV === 'production' ? 'production' : 'development';

 const port: number = Number(process.env.PORT) || 4000;

export const env = {
    nodeEnv,
    port,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        name: process.env.DB_NAME || 'coursaly',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || ''
    }
};