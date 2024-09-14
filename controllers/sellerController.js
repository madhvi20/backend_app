const { createProduct } = require('../models/productModel');

exports.addProduct = async (req, res) => {
  const { name, category, description, price, discount } = req.body;
  try {
    const newProduct = await createProduct(name, category, description, price, discount, req.user.id);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
