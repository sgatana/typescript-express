import { app } from './server';

const port = process.env.PORT || 5000;

app.listen(port, () => {
  // tslint:disable-next-line: no-console
  console.log(`server running on port ${port}`);
});