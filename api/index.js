const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
// const { MongoClient, ServerApiVersion } = require('mongodb');


const app = express();
app.use(cors())
const PORT = process.env.PORT || 3001;

const mongoURI = 'mongodb+srv://ibiekay2:sonorous@ultimategrants.przia9q.mongodb.net/test?retryWrites=true&w=majority';

// const dbName = 'test';
const collectionName = 'atafrica';

// Connect to MongoDB Atlas and select the specified database
mongoose.connect(mongoURI);

// Create a Mongoose model
const Model = mongoose.model('Model', new mongoose.Schema({
  // For example:
  Nigerian_Stocks: String,
}, { collection: collectionName }));

// Endpoint to get all data from the collection
app.get('/api/getData', async (req, res, next) => {
  try {
    // Fetch all documents from the collection
    const data = await Model.find();

    console.log(data)

    // Respond with the data
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

