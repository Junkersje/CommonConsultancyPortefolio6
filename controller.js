const express = require('express');
const router = express.Router();
const connection = require('./db.js');
const queries = require('./queries/queries.js');

// Endpoint for overview query
router.get('/overview', (req, res) => {
  connection.query(queries.getOverviewAll, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
    console.log(results);
  });
});
//Denmark
router.get('/dkall', (req, res) => {
  connection.query(queries.getAllInDenmark, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
    console.log(results);
  });
});

router.get('/dkfor', (req, res) => {
  connection.query(queries.getAllForInDenmark, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
    console.log(results);
  });
});

router.get('/dkimod', (req, res) => {
  connection.query(queries.getAllAgainstInDenmark, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

// Germany
router.get('/germanyall', (req, res) => {
  connection.query(queries.getAllInGermany, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

router.get('/germanyfor', (req, res) => {
  connection.query(queries.getAllForInGermany, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

router.get('/germanyimod', (req, res) => {
  connection.query(queries.getAllAgainstInGermany, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

// France
router.get('/franceall', (req, res) => {
  connection.query(queries.getAllInFrance, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

router.get('/francefor', (req, res) => {
  connection.query(queries.getAllForInFrance, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

router.get('/franceimod', (req, res) => {
  connection.query(queries.getAllAgainstInFrance, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

// Malta
router.get('/maltaall', (req, res) => {
  connection.query(queries.getAllInMalta, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

router.get('/maltafor', (req, res) => {
  connection.query(queries.getAllForInMalta, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

router.get('/maltaimod', (req, res) => {
  connection.query(queries.getAllAgainstInMalta, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

// Wales
router.get('/walesall', (req, res) => {
  connection.query(queries.getAllInWales, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

router.get('/walesfor', (req, res) => {
  connection.query(queries.getAllForInWales, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

router.get('/walesimod', (req, res) => {
  connection.query(queries.getAllAgainstInWales, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

// Schweiz
router.get('/schweizall', (req, res) => {
  connection.query(queries.getAllInSchweiz, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

router.get('/schweizfor', (req, res) => {
  connection.query(queries.getAllForInSchweiz, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

router.get('/schweizimod', (req, res) => {
  connection.query(queries.getAllAgainstInSchweiz, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

module.exports = router;