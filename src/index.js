import debug from 'debug';
import app from './app';

const port = process.env.PORT || 8001;

app.listen(port, () => {
  debug(`Server is running on port ${port}`);
  console.log(`Server is running on port ${port}`);
});
