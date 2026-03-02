import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

const connectToDatabase = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log('Already connected to database.');
    return;
  }

  if (connectionState === 2) {
    console.log('Connecting to database...');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI!, {
      dbName: 'portfolio',
      bufferCommands: true,
    });
    console.log('Database connected successfully.');
  } catch (err: unknown) {
    console.log('Database connection failed.');
    throw new Error('Database connection failed: ' + String(err));
  }
};

export default connectToDatabase;