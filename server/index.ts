import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
    res.json({ greeting: 'Hello world!' });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port} !`);
});
