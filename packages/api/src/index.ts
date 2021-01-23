import { app } from './app';
import { port } from './config';

app.listen(port, () => console.log(`Api listening on port:${port}.`));
