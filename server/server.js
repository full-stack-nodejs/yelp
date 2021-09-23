require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

// Get all Restourants
app.get("/api/v1/restourants", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restourants");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restourant: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// Get a Restourant
app.get("/api/v1/restourants/:id", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restourants WHERE id = $1", [
      req.params.id,
    ]);

    res.status(200).json({
      status: "success",
      data: {
        restourant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// Create a Restourant
app.post("/api/v1/restourants", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO restourants (name, location, price_range) values ($1, $2, $3) RETURNING *",
      [req.body.name, req.body.location, req.body.price_range]
    );

    res.status(201).json({
      status: "success",
      data: {
        restourant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// Update a Restourant
app.put("/api/v1/restourants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restourants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restourant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Delete Restourant
app.delete("/api/v1/restourants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "DELETE FROM restourants WHERE id = $1 RETURNING *",
      [req.params.id]
    );

    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server run and listening on port ${port}`);
});
