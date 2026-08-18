import { Router, Request, Response } from 'express';
import { checkDatabaseConnection } from '../config/db.js';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const isDbConnected = await checkDatabaseConnection();

  res.status(200).json({
    status: 'ok',
    service: 'Pocket Pulse API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    database: {
      connected: isDbConnected,
      status: isDbConnected ? 'connected' : 'disconnected (PostgreSQL container pending setup)',
    },
  });
});

export default router;
