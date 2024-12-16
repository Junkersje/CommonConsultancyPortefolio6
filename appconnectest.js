const connection = require('./db.js');
const queries = require('./queries.js');

const query = queries.getAllInDenmark

connection.query(query, (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error.stack);
    return;
  }
  console.log('Results:', results);
});

connection.end();
