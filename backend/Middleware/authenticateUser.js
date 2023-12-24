const authenticateUser = (req, res, next) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(401).send('Unauthorized: Missing credentials');
    }
  
    const sql = 'SELECT * FROM login WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
  
      if (result.length === 0) {
        return res.status(401).send('Unauthorized: Invalid credentials');
      }
  
      // User authenticated
      next();
    });
};

module.exports = authenticateUser;