import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import User from "../model/user.model.ts";

const URI = process.env.MONGO_URI;

if (!URI) {
  throw new Error("MONGO_URI environment variable is not defined.");
}

const seedAdmin = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPass = process.env.ADMIN_PASS;

    if (!adminEmail || !adminPass) {
      throw new Error(
        "Missing administrative credentials in environment configuration.",
      );
    }

    const existingUser = await User.findOne({ username: adminEmail });
    if (existingUser) {
      console.log("Admin user already exists.");
      return;
    }

    await User.create({
      username: adminEmail,
      password: adminPass, // encryt and save in future
      role: "admin",
    });
    console.log("Admin user seeded successfully!");
  } catch (error) {
    console.error(error);
    console.error("Error seeding admin");
  }
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI);
    console.log(`MongoDB connected ${conn.connection.host}`);

    await seedAdmin();
  } catch (error) {
    console.log("MongoDB connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
