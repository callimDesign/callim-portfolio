// Unauthenticated local editing proxy: never expose on the LAN or Internet.
process.env.BIND_HOST='127.0.0.1';
process.env.PORT='8082';
await import('decap-server');