                                                                                                                                                                 import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient ();

const app = express ();

app.use (express.json());




app.use((req, res, next)=> {
    res.status(404);
    return res.json({
        success: false,
        payload: null,
        message:`APY SAYS> Endpoint not not found for path ${req.path}`,
        

    });
});

app.listen(process.env.PORT || 8000, () =>
console.log(` Server ready at: http://localhost:8000`)
);