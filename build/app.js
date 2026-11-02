import express, {} from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur Express !');
});
export default app;
//# sourceMappingURL=app.js.map