import * as express from 'express';
import dotenvConfig from './dotenv';
import DB from './DB';

(async function () {
  await dotenvConfig();
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
