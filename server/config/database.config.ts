import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || 5432,
  user: process.env.DATABASE_USER || 'kiyo',
  name: process.env.DATABASE_NAME || 'content-share',
  password: process.env.DATABASE_PASSWORD || 'a1b2c3d4e5A',
}));
