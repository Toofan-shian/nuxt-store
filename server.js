const express = require('express');
const { createNuxt } = require('nuxt');

async function startServer() {
  const app = express();

  const nuxt = await createNuxt({
    ssr: true,
    dev: process.env.NODE_ENV !== 'production',
  });

  await nuxt.ready();

  // Use Nuxt middleware
  app.use(nuxt.render);

  // Start the server
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
}

startServer();