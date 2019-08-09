"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateToken = validateToken;
exports.notValidToken = notValidToken;
exports.TokenUnauthorized = TokenUnauthorized;
exports.tokenError = tokenError;

function validateToken(token) {
  if (token && token.startsWith('Bearer ')) {
    return token.slice(7, token.length);
  }

  return token;
}

function notValidToken(res) {
  return res.status(401).json({
    status: 401,
    message: 'The authorization token provided is invalid'
  });
}

function TokenUnauthorized(res) {
  return res.status(403).json({
    status: 403,
    message: 'You are not authorized to access this resource'
  });
}

function tokenError(res) {
  return res.status(401).json({
    status: 401,
    message: 'The authorization token provided is invalid'
  });
}
//# sourceMappingURL=middlewareHelper.js.map