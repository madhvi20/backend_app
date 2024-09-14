const pool = require('../config/db');

const createProduct = async (name, category, description, price, discount, userId) => {
  const query = `
    INSERT INTO products (name, category, description, price, discount, user_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [name, category, description, price, discount, userId];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getProductsByCategory = async (category) => {
  const query = 'SELECT * FROM products WHERE category = $1';
  const result = await pool.query(query, [category]);
  return result.rows;
};

module.exports = { createProduct, getProductsByCategory };
