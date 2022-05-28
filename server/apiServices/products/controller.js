import dataProducts from './data.js';
import {v4 as uuidv4} from 'uuid';

const controller = {};

/**
 * Retrieve stored products
 */
controller.list = (req, res) => {
  const { userId } = req.params;

  if (userId)
    res.json(dataProducts.filter(product => product.userId === userId));
  else
    res.json(dataProducts);
};

/**
 * Add a new product
 */
controller.add = (req, res) => {
  const newProduct = req.body;
  const id = String(uuidv4());

  newProduct.id = id;
  dataProducts.push(newProduct)
  
  res.json({message: 'Successfully added'});
};

/**
 * Remove a product
 */
controller.remove = (req, res) => {
  const { id }= req.params;

  dataProducts = dataProducts.filter(product => product.id !== id)
  if (dataProducts.find(product => product.id === id)) {
    return res.json({message: "The product could not be removed"})
  }

  res.json({message: 'Successfully deleted'});
};

/**
 * Update product information
 */
controller.update = (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  
  product = dataProducts.find(product => product.id === id);
  if (!product) {
    return res.json({message: "The product is not registered"})
  }
  dataProducts.forEach(product => {
    if (product.id === id) {
      product.name = name;
      product.description = description;
      product.price = Number(price)
    }
  })

  res.json({message: "Successfully updated"})
};

export default controller
