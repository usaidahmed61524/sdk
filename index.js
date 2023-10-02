// app.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db');
const domainCheckingRoutes = require('./routes/DomainNameRoute');
require('dotenv').config();
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes

// If you're using Express version 4.16+ you can use the built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', domainCheckingRoutes);
// If you're using an older version of Express or want to use body-parser explicitly
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

// ... other code ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
