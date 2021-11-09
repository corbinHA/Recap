import express from 'express';

const app = express();

app.use(express.json());

app.get('/firstwordsentviainternet', (req, res) => res.send('lo'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('server is alive'));