import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser"
import db from "./utils/db";
import cors from 'cors'
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json())
app.use(
  cors({
    origin: 'https://profile.digiimpact.in',
    // Allow follow-up middleware to override this CORS for options
    preflightContinue: true,
  }),
);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/api/submit", async (req: Request<{}, {}, {phoneNumber: string}>, res) => {
    const response = await db.user.create({data: {phoneNumber: req.body.phoneNumber}})
    if (response.id) {
        return res.status(200).json({status: true})
    } else {
        return res.status(500).json({status: false})
    }
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});