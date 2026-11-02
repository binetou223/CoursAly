import app from './app.js';
import { env } from './config/env.js';
app.listen(env.port, () => {
    console.log(`Le serveur est lancé sur le port http://localhost:${env.port}`);
    console.log(`Environnement :${env.nodeEnv}`)
});