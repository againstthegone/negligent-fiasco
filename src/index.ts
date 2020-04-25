import express, { static as serveStatic } from 'express';

const app = express();
app.use(serveStatic('public'));
app.listen(8080, () => {
    console.log('App started on http://localhost:8080');
});