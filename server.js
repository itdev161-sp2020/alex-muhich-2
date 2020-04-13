import express from 'express';
import connectDatabase from './config/db';

//init express app
const app = express();

//connect db
connectDatabase();

//api endpoint
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

//connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));

