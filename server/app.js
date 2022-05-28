import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import morgan from 'morgan';
import indexRouter from './routes/index.js';
import cors from 'cors';

// Initializations
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Settings
app.set('port', process.env.PORT || 3001);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
})
app.use('/', indexRouter);


// Public
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

// Server
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});
