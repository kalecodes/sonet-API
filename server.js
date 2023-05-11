const express = require('express');
const mongoose = require('mongoose');

// instantiate server
const app = express();
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

// connect to mongoose on start
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sonet-API', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// log mongo queries being executed
mongoose.set('debug', true);

// listen for request on server
app.listen(PORT, () => console.log(`Connected to localhost:${PORT}`));
