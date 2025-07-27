const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
  user: '3CDK4ziA6tXK7Rq.root',
  password: 'hCCj0MX7w8Rb8B2Y',
  database: 'test',
  port: 4000,
  ssl: { rejectUnauthorized: true },
});

// Register
app.post('/register', async (req, res) => {
  const { username, password, walletId } = req.body;
  const numOfNFT = 0;

  if (!username || !password || !walletId) {
    return res.status(400).json({ message: 'All fields required.' });
  }

  try {
    const conn = await pool.getConnection();
    const [existing] = await conn.execute('SELECT * FROM gameOfLife WHERE username = ?', [username]);

    if (existing.length > 0) {
      conn.release();
      return res.status(409).json({ message: 'Username already exists.' });
    }

    await conn.execute(
      'INSERT INTO gameOfLife (username, password, walletId, numOfNFT) VALUES (?, ?, ?, ?)',
      [username, password, walletId, numOfNFT]
    );

    conn.release();
    res.status(201).json({ message: 'Registered successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Database error.' });
  }
});

// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required.' });
  }

  try {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute('SELECT * FROM gameOfLife WHERE username = ?', [username]);
    conn.release();

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const dbUser = rows[0];
    console.log(`Login attempt for '${username}' => entered: "${password}", stored: "${dbUser.password}"`);

    if (dbUser.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const user = {
      username: dbUser.username,
      walletId: dbUser.walletId,
      numOfNFT: dbUser.numOfNFT,
    };

    return res.status(200).json({ message: 'Login successful.', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Database error.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
