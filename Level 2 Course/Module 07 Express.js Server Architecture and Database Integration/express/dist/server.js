import express, {} from "express";
import { Pool } from "pg";
import config from "./config";
const app = express();
const port = config.port;
// const port = 5000;
app.use(express.json()); //  express middleware, have use before request, it receives the data from client found inside req.body, returns it as json string
//  acts as a body parser
app.use(express.text());
app.use(express.urlencoded()); //  doesn't recognize the nested data
app.use(express.urlencoded({ extended: true })); //  reconigze the nested  data too
const pool = new Pool({
    connectionString: config.connection_string,
});
const initDB = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(30),
            email VARCHAR(30) UNIQUE NOT NULL,
            password VARCHAR(20) NOT NULL,
            is_active BOOLEAN DEFAULT True,
            age INT,

            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()

            )
            `);
        console.log("Database Connected Successfully.");
    }
    catch (error) {
        console.log(error);
    }
};
initDB();
app.get("/", (req, res) => {
    //   res.send("Hello World!");
    //   res.send(req);
    console.log(req.body);
    res.status(200).json({
        success: true,
        message: "Express Server!!",
    });
});
app.post("/api/users", async (req, res) => {
    //   console.log(req.body);
    //   const body = req.body; // the body of the request is assigned a variable
    // destructuring to hide important informations
    const { name, email, password, age } = req.body; // the body of the request is assigned a variable
    try {
        const results = await pool.query(`
    INSERT INTO users(name, email, password, age) 
    VALUES($1, $2, $3, $4)
    RETURNING *
    `, [name, email, password, age]);
        //   console.log(results);
        res.status(200).json({
            success: true,
            message: "User Created Successfully!",
            data: results.rows[0],
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            error: error,
        });
    }
});
app.get("/api/users", async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT * FROM users
            `);
        res.status(200).json({
            success: true,
            message: "Users Retrieved Successfully!",
            data: result.rows,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            data: error,
        });
    }
});
app.get("/api/users/:id", async (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    try {
        const result = await pool.query(`
        SELECT * FROM users WHERE id = $1
        `, [id]);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: `User ${id} not Found!`,
                data: {},
            });
        }
        res.status(200).json({
            success: true,
            message: `User ${id} Retrieved Successfully!`,
            data: result.rows[0],
        });
        // console.log(result.rows);
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            data: error,
        });
    }
});
app.put("/api/users/:id", async (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    const { name, password, age, is_active } = req.body;
    //   console.log(id);
    //   console.log({ name, password, age, is_active });
    try {
        const result = await pool.query(`
        UPDATE users 

        SET 
        Name=COALESCE($1, name),
        Password=COALESCE($2, password), 
        age=COALESCE($3, age), 
        is_active=COALESCE($4, is_active)

        WHERE id = $5
        RETURNING *
        `, [name, password, age, is_active, id]);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: `User ${id} not Found!`,
                data: {},
            });
        }
        //   console.log(result);
        res.status(200).json({
            success: true,
            message: `User ${id} Updated Successfully!`,
            data: result.rows[0],
        });
    }
    catch (error) {
        // console.log(result.rows);
        res.status(500).json({
            success: false,
            message: error.message,
            data: error,
        });
    }
});
app.delete("/api/users/:id", async (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    //   console.log(id);
    //   console.log({ name, password, age, is_active });
    try {
        const result = await pool.query(`
        DELETE FROM users 

        WHERE id = $1
        `, [id]);
        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: `User ${id} not Found!`,
                data: {},
            });
        }
        //   console.log(result);
        res.status(200).json({
            success: true,
            message: `User ${id} Deleted Successfully!`,
            data: {},
        });
    }
    catch (error) {
        // console.log(result.rows);
        res.status(500).json({
            success: false,
            message: error.message,
            data: error,
        });
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map