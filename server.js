import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import { PORT, MONGO_URI } from './utils/config.js';

const connectDB = async () => {
    if (!MONGO_URI) {
        console.log(
            'MONGO_URL is not defined in the env file'.red.underline.bold
        );
        process.exit(1);
    }
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected'.blue.underline.bold);
    } catch (err) {
        console.log(err.message.red.underline.bold);
        process.exit(1);
    }
};
// connectDB()

const app = express();

colors.enable()

dotenv.config()

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const log = console.log;


app.listen(PORT || 5000, () => {
    log(`Server running on port: ${PORT}`.blue)
})

