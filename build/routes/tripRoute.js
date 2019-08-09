"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _tripController = require("../controllers/tripController");

var _validateInput = require("../middlewares/validateInput");

var _authenticateAdmin = _interopRequireDefault(require("../helpers/authenticateAdmin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // create a new trip


router.post('/trip', _authenticateAdmin["default"], _validateInput.validateTrip, _tripController.createAtrip); // Retrieve all Trips

router.get('/trip', _tripController.getAllTrips); // Retrieve a single Trip by tripId

router.get('/trip/:tripId', _tripController.getOneTrip); // Cancel a Trip by tripId

router.post('/trip/:tripId', _tripController.cancelTrip);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=tripRoute.js.map