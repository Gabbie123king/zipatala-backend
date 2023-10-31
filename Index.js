const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 5000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Hospital',
  password: 'root',
  port: 5432, // Default PostgreSQL port
});

async function connectToPostgreSQL() {
  try {
    // Connect to PostgreSQL
    const client = await pool.connect();
    console.log('Connected to PostgreSQL');

    // Perform database operations here

    // Release the client when you're done
    client.release();
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error);
  }
}

connectToPostgreSQL();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
