"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Db {
    constructor() {
        this.DB_URL = "mongodb://192.168.99.100:27017/db_portal";
    }
    createConnection() {
        mongoose.connect(this.DB_URL);
    }
}
exports.default = Db;
