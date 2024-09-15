const cors = require('cors');
import express, { json } from 'express';
const app = express();
import '../database/db';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';
import morgan from 'morgan';

app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use('/auth', authRoutes);
app.use('/task', taskRoutes);

// localhost:4000/auth/register
//localhost:27017

const port = 4000;

app.listen(port, () => {
	console.log(`server is running on port`, port);
});