const http = require('http');
const  express =  require ('express');
const morgan = require ('morgan');
const  bodyParser = require  ('body-parser');
const config = require('./config/config');
const user = require('./routes/userRoute');


const app = express();

const { port, env } = config;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// API Routes
app.use('/api/v1/auth',user);
//app.use('/api/v1', trip);

// Home page route
app.get('/', (req, res) => {
  res.status(200).json(
    {
      status: 200,
      data: [{
        message: 'Welcome to default WayFare API Home Route',
      }],
    },
  );
});

// Render quick credit documentation
//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

// handle all error
app.use((err, req, res, next) => {
  if (err) {
    return res.status(500).json({
      status: 500,
      error: 'Internal server error',
    });
  }
  return next();
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

module.exports = app;
