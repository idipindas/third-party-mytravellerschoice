import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes/routes';
import morgan from 'morgan'
import cors from 'cors'

dotenv.config();

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// A sample route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});
app.use('/api/v1',router)


// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
