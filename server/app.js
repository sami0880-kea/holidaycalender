import 'dotenv/config'
import express from "express";
import cors from "cors";
import path from "path";
import holidayRouter from './router/holidayRouter.js'

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve('../client/build')));

// Routers
app.use(holidayRouter);

app.get("*", (req, res) => {
    res.sendFile(path.resolve('../client/build/index.html'))
});

app.listen(PORT, () => console.log("Server running on port", PORT));