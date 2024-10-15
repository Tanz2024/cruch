import mongoose from 'mongoose';
import { DB_NAME } from './constant';

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('ERROR: ', error);
        throw error;
    }
};

export default connectDB;
