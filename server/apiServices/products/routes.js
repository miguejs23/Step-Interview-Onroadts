import express from 'express';
import controller from './controller.js';

const router = express.Router();
const { list, add, remove, update } = controller;

router.get('/list/:userId?', list);
router.post('/add', add);
router.put('/update/:id', update);
router.delete('/remove/:id', remove);

export default router;
