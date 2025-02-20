const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',       // Your database host
  user: 'root',            // Your database username
  password: 'password',    // Your database password
  database: 'your_database_name' // Your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});
// Query the 'users' table to get all data
connection.query('SELECT * FROM users', (err, results, fields) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      return;
    }
    console.log('Data from users table:', results); // This will show the data
  });
  
  // Close the connection when done
  connection.end();
  const { MongoClient } = require('mongodb');

// Replace the URL with your MongoDB connection string
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB database
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB: ' + err);
    return;
  }
  console.log('Connected to MongoDB');
  const db = client.db('your_database_name'); // Specify the database name
  const collection = db.collection('users'); // Specify the collection name

  // Fetch and display all documents in the 'users' collection
  collection.find({}).toArray((err, documents) => {
    if (err) {
      console.error('Error fetching data: ' + err);
      return;
    }
    console.log('Data from users collection:', documents); // This will show the data
    client.close(); // Close the connection
  });
});
const { MongoClient } = require('mongodb');

// Replace the URL with your MongoDB connection string
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB database
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB: ' + err);
    return;
  }
  console.log('Connected to MongoDB');
  const db = client.db('your_database_name'); // Specify the database name
  const collection = db.collection('users'); // Specify the collection name

  // Fetch and display all documents in the 'users' collection
  collection.find({}).toArray((err, documents) => {
    if (err) {
      console.error('Error fetching data: ' + err);
      return;
    }
    console.log('Data from users collection:', documents); // This will show the data
    client.close(); // Close the connection
  });
});
const { Client } = require('pg');

// Create a client instance and connect to the database
const client = new Client({
  user: 'your_username',      // Your PostgreSQL username
  host: 'localhost',          // Your PostgreSQL host
  database: 'your_database',  // Your PostgreSQL database name
  password: 'your_password',  // Your PostgreSQL password
  port: 5432,                 // Default PostgreSQL port
});

// Connect to the database
client.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL: ' + err.stack);
    return;
  }
  console.log('Connected to PostgreSQL');
});

// Query the database to get data from a table (e.g., users)
client.query('SELECT * FROM users', (err, res) => {
  if (err) {
    console.error('Error executing query: ' + err.stack);
    return;
  }
  console.log('Data from users table:', res.rows); // This will show the data
  client.end(); // Close the connection
});
const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database (it will create the database file if it doesn't exist)
const db = new sqlite3.Database('./my_database.db', (err) => {
  if (err) {
    console.error('Error connecting to SQLite: ' + err.message);
    return;
  }
  console.log('Connected to SQLite database');
});

// Query the database to view all data from a table (e.g., users)
db.all('SELECT * FROM users', (err, rows) => {
  if (err) {
    console.error('Error querying database: ' + err.message);
    return;
  }
  console.log('Data from users table:', rows); // This will show the data
});

// Close the connection
db.close();
console.log("Current directory:", db.js);
