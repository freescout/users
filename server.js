
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/index');
const path = require('path')
console.log(`Input server port ${process.env.PORT}`);
const PORT = process.env.PORT || 3001;
require('dotenv').config()
const app = express();

var corsOptions = {
  origin: ['https://scot-users.herokuapp.com', 'http://localhost:3000']
};
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', router);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', function() {
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose Connection Error : ' + error);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});