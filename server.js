const express = require('express');
const connectDB = require('./db/mongodb');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

const router = require('./routers/router');
app.use('/', router);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
