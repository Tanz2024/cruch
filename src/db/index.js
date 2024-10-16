import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`Connected to MongoDB successfully: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('ERROR: ', error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
