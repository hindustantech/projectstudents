import express from "express";
import { ConnectDB } from "./config/db.js";
import StudentRoute from './Router/StudentRoute.js'
import cors from 'cors';
const app = express();
app.use(cors({
    origin: 'https://frontendproject-chi.vercel.app', // Allow only your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); // ✅ Parses JSON request bodies
app.use(express.urlencoded({ extended: true })); // ✅ Parses URL-encoded bodies


ConnectDB();
const PORT = 8080;



app.use('/api/v1/', StudentRoute);

app.get('/', (req, res) => {
    res.send('Hello server is  Running ');
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})