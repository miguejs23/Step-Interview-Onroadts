import express from 'express';
import controller from './controller.js'

const router = express.Router();
const { signup, signin } = controller;

// Sign up
router.post('/signup', signup)

// Sign In
router.post('/signin',  signin)


export default router;
