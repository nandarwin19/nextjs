import mongoose from "mongoose";

export const connectToDb = async (mongoose) => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connection.readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
