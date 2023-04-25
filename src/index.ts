import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT: string = process.env.PORT;
 
const app: Express = express();
 
app.get('/', (req: Request, res: Response) => {
  res.send("TypeScript with Express");
});
 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
