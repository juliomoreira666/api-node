import * as mongoose from "mongoose";

class Database {
  private DB_URL = "mongodb://192.168.99.100:27017/db_portal";

  createConnection() {
    mongoose.connect(this.DB_URL);
  }
}

export default Database;
