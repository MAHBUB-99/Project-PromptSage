import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "PromptSage Marketplace",
    });

    console.log(`MongoDB connected: ${db.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
