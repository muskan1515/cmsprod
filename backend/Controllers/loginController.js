 
const db = require("../Config/dbConfig");

 
 const login = (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
  
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }
  
    const sql = "SELECT * FROM Login WHERE username = ? AND password = ?";
    db.query(sql, [username, password], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
  
      if (result.length === 1) {
        // Authentication successful
        return res.status(200).json({ message: "Login successful" });
      } else {
        // Authentication failed
        return res.status(401).json({ error: "Invalid credentials" });
      }
    });
  };

  module.exports={login}