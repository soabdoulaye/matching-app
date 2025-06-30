import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/register', (req, res) => {
  // TODO: create user
  res.json({ message: 'register' });
});

router.post('/login', (req, res) => {
  // TODO: authenticate user
  const token = jwt.sign({ userId: 1 }, 'secret');
  res.json({ token });
});

export default router;
