import mongoose from "mongoose"


let cached = (global as any).mongoose || { connection: null, promise: null };

export const connectToDB = async () => {
  if (cached.connection) return cached.connection;
  
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.Promise = cached.Promise || mongoose.connect(process.env.MONGODB_URI, {
    dbName: "evently",
    bufferCommands: false
  });

  cached.connection = await cached.Promise;

  return cached.connection;
}