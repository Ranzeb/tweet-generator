import router from './routes/routes.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/openai", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("API server is running..."));

