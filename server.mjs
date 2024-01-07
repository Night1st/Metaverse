import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app2 = next({ dev });
const handle2 = app2.getRequestHandler();

const proxyPort = 3333;

app2.prepare().then(() => {
  const server = express();

  // Define the paths you want to handle with Next.js for the second app
  server.all('*', (req, res) => {
    return handle2(req, res);
  });

  const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/vjgr.com.vn/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/vjgr.com.vn/fullchain.pem'),
  };

  https.createServer(httpsOptions, server).listen(httpsPort, () => {
    console.log(`HTTPS server for App 1 is running on port ${httpsPort}`);
  }).on('error', (err) => {
    if (err) throw err;
  });

  server.listen(proxyPort, () => {
    console.log(`Proxy server for App 2 is running on port ${proxyPort}`);
  }).on('error', (err) => {
    if (err) throw err;
  });

});