import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`\x1b[32mDatabase is connected successfully.`);

    app.listen(config.port, () => {
      console.log(`\x1b[33mApplication is listening to port ${config.port}`);
    });
  } catch (error) {
    console.log(`Failed to connect database`, error);
  }
}
main();
