import mongoose from "mongoose";
import {config} from "./config";

class Database {
    static initialize() {
        mongoose.connect(config.MONGODB_URI, {
            dbName: config.DB_NAME
        });
        mongoose.connection.once('connecting', () => {
            console.log('connecting to mongodb server via mongoose...')
        })
        mongoose.connection.once('connected', () => {
            console.log('connected to mongodb server via mongoose...')
        })
        mongoose.connection.once('open', () => {
            console.log('database is active...')
        })
        mongoose.connection.once('disconnecting', () => {
            console.log('disconnecting from mongodb server...')
        })
        mongoose.connection.once('disconnected', () => {
            console.log('disconnected from mongodb server...')
        })
        mongoose.connection.once('close', () => {
            console.log('closing connections with mongodb server...')
        })
        mongoose.connection.once('reconnected', () => {
            console.log('reconnected to mongodb server...')
        })
        mongoose.connection.once('error', (err) => {
            console.log('mongodb server error...')
            console.log(err)
        })

    }
}

export default Database;