import express from 'express';
import tasks from './routes/tasks.js';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Add middleware
app.use(express.json());

// route : http://localhost:5000/todos
app.use('/todos', tasks);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send(`Welcome to the food_delivery_app...`);
});

(async () => {
    try {
        await connectDB(process.env.CONNECT_URI);
        //console.log('object', process.env.CONNECT_URI)
        app.listen(PORT, () => {
            console.log(`Server is running in : http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
})();