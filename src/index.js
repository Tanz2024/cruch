
import connectDB from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config({
    path: './env'
}
)
connectDB();















// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Connected to MongoDB successfully');

//         app.listen(process.env.PORT, () => {
//             console.log('Server is running on port:', process.env.PORT);
//         });
//     } catch (error) {
//         console.error('ERROR: ', error);
//         throw error;
//     }
// })();

// app.on('error', (error) => {
//     console.log('Error: ', error);
//     throw error;
// });


//use try catch to handle database


// const app = express()
// const connectDB = async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         app.on("error", (error) => {
//             console.log("Error: ", error);
//             throw error;
//         });
//         app.listen(process.env.Port, () => {
//             console.log("Server is running on port: ", process.env.Port);
//         });
//         {
//             console.log('Connected to MongoDB successfully!');
//         }
//         console.log('Connected to MongoDB successfully!');
//     } catch (error) {
//         console.error('ERROR: ', error);
//         throw error;
//     }
// };

// export default connectDB;
