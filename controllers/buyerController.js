const { getProductsByCategory } = require('../models/productModel');

exports.getProducts = async (req, res) => {
  const { category } = req.query;
  try {
    const products = await getProductsByCategory(category);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
