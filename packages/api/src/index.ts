import { getApp } from './app';
import { port } from './config';

getApp()
  .then(app => {
    app.listen(port, () => console.log(`Api listening on port:${port}.`));
  });
