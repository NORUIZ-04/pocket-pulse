import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Pocket Pulse Backend running on http://localhost:${PORT}`);
  console.log(`🏥 Health Check available at http://localhost:${PORT}/api/v1/health`);
});
