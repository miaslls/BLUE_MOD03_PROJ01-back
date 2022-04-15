'use strict';

const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/moods.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/mood', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🔗`);
});
