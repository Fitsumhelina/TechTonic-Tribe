const cors=require('cors')
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const blogRouter = require ('./routes/blog-routes.js');
const router = require ('./routes/user-routes.js');
const videoRouter = require('./routes/video');
// const router = express.Router();
// const userRouter = require('./routes/user');
// const insertData = require('./insert-data/insertData');

dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost:27017/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', async () => {
  console.log('Connected to MongoDB');

  // try {
  //   await insertData();
  //   console.log('Data inserted successfully!');
  // } catch (error) {
  //   console.error('Error inserting data:', error);
  // }

});

app.use('/api', videoRouter);
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


