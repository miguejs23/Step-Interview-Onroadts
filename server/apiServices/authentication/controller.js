import { v4 as uuidv4 } from 'uuid';
import usersData from './data.js';
import { encrypt, compare } from '../../helpers/handleBcrypt.js';

const controller = {};

/**
 * Register a new user
 */
controller.signup = (req, res) => {
  const { username, email, password } = req.body;
  const hashPassword = encrypt(password);
  const user = usersData.find(user => user.email === email);
  if (user) {
    res.status(409);
    return res.json({message: 'The email is already registered'});
  }
  const id = uuidv4();
  const newUser = {
    id,
    username,
    email,
    password: hashPassword
  }
  usersData.push(newUser);

  res.status(201);
  res.json({message: 'Successfully registered user', data: {id, username}});
}

/**
 * Validate a user
 */
controller.signin = (req, res) => {
  const { username, password } = req.body;
  const user = usersData.find(user => user.username === username);

  if (!user) {
    res.status(404);
    return res.json({message: 'User not found'});
  }

  const hashPassword = user.password;
  const checkPassword = compare(password, hashPassword.toString());
  if (!checkPassword) {
    return res.json({message: 'Incorrect credentials'});
  }
  
  res.status(200);
  res.json({message: 'Correct credentials'});
}

export default controller;
