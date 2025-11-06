import express, { Express, Router } from "express";
import { userSchema, UserInput } from "./types/userSchema";
import jwt from "jsonwebtoken"





const app = express();

app.use(express.json());

app.post('/signup', (req, res) => {
    const inputBody: UserInput = req.body
    const result = userSchema.safeParse(inputBody);

    if (!result.success) {
        return res.status(400).json({
            "message": "Invalid Inputs"
        })
    }

})

app.listen(3001);
