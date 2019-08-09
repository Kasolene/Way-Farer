"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = _interopRequireDefault(require("./config/config"));

var _userRoute = _interopRequireDefault(require("./routes/userRoute"));

var _tripRoute = _interopRequireDefault(require("./routes/tripRoute"));

var _bookingRoute = _interopRequireDefault(require("./routes/bookingRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = _config["default"].port;
app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json()); // API Routes

app.use('/api/v1/auth', _userRoute["default"]);
app.use('/api/v1', _tripRoute["default"]);
app.use('/api/v1', _bookingRoute["default"]); // Home page route

app.get('/', function (req, res) {
  res.status(200).json({
    status: 200,
    message: 'Welcome to default WayFare API Home Route'
  });
}); // handle all error

app.use(function (err, req, res, next) {
  if (err) {
    return res.status(500).json({
      status: 500,
      err: 'Internal server error'
    });
  }

  next();
}); // Handle non exist route with with proper message

app.use(function (req, res) {
  res.status(404).json({
    status: 404,
    error: 'Wrong request. Route does not exist'
  });
});
app.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log("Server now listening at localhost:".concat(port));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map