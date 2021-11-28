import { config } from '../config/Constants';
import mongoose from 'mongoose';

export class MongoConnections {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true});
            console.log('Database Connected');
        } catch (error) {
            console.error(error.message);
            process.exit(1);
        }
    }
}