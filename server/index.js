import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config/config';
import userRoute from './routes/userRoute';
import tripRoute from './routes/tripRoute';

const app = express();

const { port } = config;


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Database Routes
app.use('/api/v1/auth', userRoute);
app.use('/api/v1', tripRoute);

// Home page route
app.get('/', (req, res) => {
  res.status(200).json(
    {
      status: 200,
      message: 'Welcome to default WayFare API Home Route',
    },
  );
});


// handle all error
app.use((err, req, res, next) => {
  if (err) {
    return res.status(500).json({
      status: 500,
      err: 'Internal server error',
    });
  } next();
});
// Handle non exist route with with proper message
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    error: 'Wrong request. Route does not exist',
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server now listening at localhost:${port}`);
});

export default app;
