const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://toofan:test123456@cluster0.bpt6m7c.mongodb.net/?retryWrites=true&w=majority';

const dbName = 'nuxifyShop';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongo() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

connectToMongo();

module.exports = client.db(dbName);