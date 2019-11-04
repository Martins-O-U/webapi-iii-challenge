// code away!

const server = require('./server');

server.listen(process.env.PORT || 3500, () => {
  console.log('listening on ' + (process.env.PORT || 3300));
});
