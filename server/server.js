require("dotenv").config();
const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");

app.use(express.json()); //req.body (when you need to access data from the client side)
app.use(cors()); //our backend can interact with our front end

//ROUTES//

app.get("/api/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.status(200).json({
      status: "success",
      results: allUsers.rows.length,
      data: {
        users: allUsers.rows,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  try {
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);

    if (user.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({
      status: "success",
      data: {
        user: user.rows[0],
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const newUser = await pool.query(
      "INSERT INTO users (firstName, lastName, email) VALUES ($1, $2, $3) RETURNING *",
      [firstName, lastName, email]
    );

    res
      .status(201)
      .json({ status: "success", data: { user: newUser.rows[0] } });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;

  if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
    return res.status(400).json({ error: "Invalid user Id" });
  }

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const updateUser = await pool.query(
      "UPDATE users SET firstName = $1, lastName = $2, email = $3 WHERE user_id = $4 RETURNING *",
      [firstName, lastName, email, id]
    );

    if (updateUser.rowCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ success: true, data: updateUser.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query(
      "DELETE FROM users WHERE user_id = $1",
      [id]
    );

    if (deleteUser.rowCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(204).json({ success: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(5000, () => {
  console.log(`server is running on port 5000`);
});
