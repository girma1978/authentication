import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Login function
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // Find user by username
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if JWT_SECRET_KEY is set in environment variables
    if (!process.env.JWT_SECRET_KEY) {
      return res.status(500).json({ message: 'JWT Secret is missing in the environment variables' });
    }

    // Create and sign JWT token
    const token = jwt.sign(
      { 
        username: user.username,
        id: user.id 
      },
      process.env.JWT_SECRET_KEY as string, // Correctly reference the environment variable
      { expiresIn: '2h' } // Token expires in 2 hours
    );

    // Return success with token
    return res.status(200).json({ 
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        username: user.username
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Server error during login' });
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
