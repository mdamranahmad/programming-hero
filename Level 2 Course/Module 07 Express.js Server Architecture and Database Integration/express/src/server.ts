import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";

const app: Application = express();
const port = 5000;

app.use(express.json()); //  express middleware, have use before request, it receives the data from client found inside req.body, returns it as json string
//  acts as a body parser
app.use(express.text());
app.use(express.urlencoded()); //  doesn't recognize the nested data
app.use(express.urlencoded({ extended: true })); //  reconigze the nested  data too

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_sf9kMogAuV1z@ep-falling-unit-apl3xv0q-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
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
  } catch (error) {
    console.log(error);
  }
};

initDB();

app.get("/", (req: Request, res: Response) => {
  //   res.send("Hello World!");
  //   res.send(req);
  res.status(200).json({
    success: true,
    message: "Express Server!!",
  });
});

app.post("/api/users", async (req: Request, res: Response) => {
  //   console.log(req.body);
  //   const body = req.body; // the body of the request is assigned a variable

  // destructuring to hide important informations
  const { name, email, password, age } = req.body; // the body of the request is assigned a variable

  try {
    const results = await pool.query(
      `
    INSERT INTO users(name, email, password, age) 
    VALUES($1, $2, $3, $4)
    RETURNING *
    `,
      [name, email, password, age],
    );
    //   console.log(results);
    res.status(200).json({
      success: true,
      message: "User Created Successfully!",
      data: results.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
});

app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
            SELECT * FROM users
            `);
    res.status(200).json({
      success: true,
      message: "Users Retrieved Successfully!",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
});

app.get("/api/users/:id", async (req: Request, res: Response) => {
  // const id = req.params.id;
  const { id } = req.params;

  try {
    const result = await pool.query(
      `
        SELECT * FROM users WHERE id = $1
        `,
      [id],
    );

    if (result.rows.length === 0) {
      res.status(500).json({
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
  } catch (error: any) {
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
