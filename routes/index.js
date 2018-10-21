var express = require('express');
var router = express.Router();

const { Pool } = require ('pg');
const pool = new Pool ({
  connectionString: 'postgres://thcoizirihgxji:662ba6ceb6ef5b404a0a82c889e7693aec0d8cb963968e5b4240d25ce0fc525a@ec2-23-21-166-148.compute-1.amazonaws.com:5432/dd2e9rnufbb68c',
  ssl: true
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/playlist', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query ('SELECT * FROM playlist');
    const results = { 'results': (result) ? result.rows : null };
    res.render('playlist', results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("ERROR " + err);
  }
});

router.get('/contacto', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query ('SELECT * FROM contacto');
    const results = { 'results': (result) ? result.rows : null };
    res.render('contacto', results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("ERROR " + err);
  }
});

module.exports = router;
