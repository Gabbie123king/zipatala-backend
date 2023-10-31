const pool = require("../db");
const queries = require("./queries");
const axios = require("axios");

const getFacilities = (req, res) => {
  pool.query(queries.getFacilities, (error, results) => {
    if (error) {
      console.error("Error querying the database:", error);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.status(200).json(results.rows);
  });
};

const addFacility = async (req, res) => {
  const { facility_name, district_id, facility_code, owner_id } = req.body;
  pool.query(
    queries.addFacility,
    [facility_code, facility_name, district_id, owner_id],
    (error, results) => {
      if (error) {
        console.error("Error inserting facility:", error);
        res.status(500).send(`Error inserting facility: ${error.message}`);
      } else {
        res.status(201).send("Facility created successfully");
      }
    }
  );
};

const addDistrict = (req, res) => {
  const { district_code, district_name } = req.body;
  pool.query(
    queries.addDistrict,
    [district_code, district_name],
    (error, results) => {
      if (error) {
        console.error("Error inserting district:", error);
        res.status(500).send("Error inserting district");
      } else {
        res.status(201).send("District Created");
      }
    }
  );
};

const getDistricts = (req, res) => {
  pool.query(queries.getDistricts, (error, results) => {
    if (error) {
      console.error("Error querying the database:", error);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.status(200).json(results.rows);
  });
};

const addOwner = (req, res) => {
  const { owner_name } = req.body;
  pool.query(queries.addOwner, [owner_name], (error, results) => {
    if (error) {
      console.error("Error inserting Name:", error);
      res.status(500).send("Error inserting Name");
    } else {
      res.status(201).send("Owner Inserted");
    }
  });
};

const getOwners = (req, res) => {
  pool.query(queries.getOwners, (error, results) => {
    if (error) {
      console.error("Error querying the database:", error);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getFacilities,
  addFacility,
  addDistrict,
  getDistricts,
  addOwner,
  getOwners,
};
