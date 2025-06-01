const express = require('express');
const cors = require('cors');
const recognitionRoutes = require('./routes/recognition');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/recognize', recognitionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
