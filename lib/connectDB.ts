import mongoose from "mongoose";


let isConnected = false;
export const connectDB = async () => {
    if (isConnected) {
        console.log("MongoDB already connected");
        return mongoose.connection;
    }
    try {
        const conn = await mongoose.connect(process.env.NEXT_DB_URI as string);
        isConnected = true;
        console.error("MongoDB connection successfully:");
        return conn.connection;
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB");
    }
}