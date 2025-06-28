import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js";

dotenv.config();

// middleware
app.use(express.json());

const app = express()

const PORT = process.env.PORT || 5001;

async function initDB() {
    try {
        await sql `CREATE TABLE transactions(
            id SERIAL PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            amount DECIMAL(10,2) NOT NULL,
            category VARCHAR(255) NOT NULL,
            created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`

        console.log("database initialized sucessfully")
    } catch (error) {
        console.log("Error initiolizing DB",error)
        process.exit(1) // status code 1 means failure, 0 success
    }
}


app.post("/api/transactions", async (req,res) => {
    //title, amount, category, user_id
    try {
        const {title, amount, category,user_id}
    } catch (error) {
        
    }
})

console.log("my port:", process.env.PORT)

initDB().then(() => {
    app.listen(PORT,() => {
        console.log("Server is up and running on PORT:", PORT)
    });
})
