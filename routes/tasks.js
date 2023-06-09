import express from 'express';
import { createTask, getAllTasks, getTask, updateTask, deleteTask } from '../controllers/tasks.js';
import {signUp, logIn} from '../controllers/signUpController.js'
const router = express.Router();


router.post('/signup', signUp);
router.post('/login', logIn);
// Create new task
router.post('/', createTask); // http://localhost:5000/api/v1/tasks
// Get all the tasks
router.get('/', getAllTasks); // http://localhost:5000/api/v1/tasks
// Get single task
router.get('/:id', getTask); // http://localhost:5000/api/v1/tasks/1
// Update the task
router.put('/:id', updateTask);  // http://localhost:5000/api/v1/tasks/1
// Delete the task
router.delete('/:id', deleteTask);  // http://localhost:5000/api/v1/tasks/1

export default router;



