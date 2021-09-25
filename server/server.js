require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Get all Restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// Get a Restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants WHERE id = $1", [
      req.params.id,
    ]);

    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// Create a Restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) RETURNING *",
      [req.body.name, req.body.location, req.body.price_range]
    );

    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// Update a Restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Delete Restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "DELETE FROM restaurants WHERE id = $1 RETURNING *",
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
