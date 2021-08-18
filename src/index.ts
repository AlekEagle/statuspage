import * as express from 'express';
import dotenvConfig from './utils/dotenv';
import { init as initDB } from './DB';

(async function () {
  await dotenvConfig();
  await initDB();
})();

const app = express(),
  instance = process.env.NODE_APP_INSTANCE || 0,
  port = parseInt(`820${instance}`);

app.all('/api/', (req, res) => {
  res.json({ hello: 'world', version: '1.0.0' });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}.`);
});
