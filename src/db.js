import mongoose from "mongoose";

export async function connectMongo(mongoUrl) {
  mongoose.set("strictQuery", true);

  await mongoose.connect(mongoUrl, {
    serverSelectionTimeoutMS: 5000,
  });

  console.log("[+] Connected to MongoDB");
}

export async function disconnectMongo() {
  await mongoose.disconnect();
}
