const cors=require('cors')
const express = require('express');
const mongoose = require('mongoose');
const videoRouter = require('./routes/video');
// const insertData = require('./insert-data/insertData');

const app = express();
app.use(cors())
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');

  try {
    // await insertData();
    console.log('Data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
});

app.use('/api', videoRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));