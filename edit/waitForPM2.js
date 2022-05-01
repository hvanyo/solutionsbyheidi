/* eslint-disable no-console */
const net = require('net');

let timeout = 10;

/**
 * Wait for the pm2 socket to be available.
 */
const tryToConnect = () => {
  const client = net.createConnection('/app/.pm2/rpc.sock')
    .on('connect', () => {
      console.log('PM2 socket is ready');
      client.end();
      process.exit(0);
    })
    .on('error', () => {
      if (timeout > 0) {
        timeout -= 1;
        console.log('Waiting for PM2 Socket...');
        setTimeout(tryToConnect, 1000);
      } else {
        console.log('Could not connect to PM2 socket!');
        process.exit(1);
      }
    });
};

tryToConnect();
