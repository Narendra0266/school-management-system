const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const http = require('http');
const socketio = require('socket.io');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: { origin: process.env.FRONTEND_URL || 'http://localhost:3000' }
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/schools', require('./routes/schools'));
app.use('/api/users', require('./routes/users'));
app.use('/api/fees', require('./routes/fees'));
app.use('/api/transport', require('./routes/transport'));
app.use('/api/hostel', require('./routes/hostel'));
app.use('/api/staff', require('./routes/staff'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running', timestamp: new Date() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Socket.io Real-time Events
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n🚀 School Management API running on http://localhost:${PORT}`);
  console.log(`📊 Database: ${process.env.DB_NAME}`);
  console.log(`🔐 JWT Secret: ${process.env.JWT_SECRET ? 'Configured' : 'NOT SET'}\n`);
});

module.exports = { app, io };
