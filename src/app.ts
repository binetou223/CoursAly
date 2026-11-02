import express, { type Request, type Response, type Express} from 'express';

const app:Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Bienvenue BINETOU !');
});

export default app;