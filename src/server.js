const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const userRoutes = require('./routes/userRoutes.js');
const countryRoutes = require('./routes/countryRoutes.js')
const categoryRoutes = require('./routes/categoryRoutes');
const attributeRoutes = require('./routes/attributeRoutes');
const cityRoutes = require('./routes/cityRoutes');
const cityImageRoutes = require('./routes/cityImageRoutes');
const firmRoutes = require('./routes/firmRoutes');
const tourRoutes = require('./routes/tourRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());



// MongoDB Bağlantısı
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB bağlantısı başarılı!'))
  .catch((err) => console.error('MongoDB bağlantı hatası:', err));
// Basit Route
app.get('/', (req, res) => {
  res.send('CityHall Backend is running!');
});

// Middleware ile Auth Route'u ekle
app.use('/api/users', userRoutes);
app.use('/api/countries',countryRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/attributes', attributeRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/city-images', cityImageRoutes);
app.use('/api/firms', firmRoutes);
app.use('/api/tours', tourRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
