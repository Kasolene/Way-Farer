export function validateToken(token) {
  if (token && token.startsWith('Bearer ')) {
    return token.slice(7, token.length);
  }
  return token;
}
 ft-signin-ap-167693020

export function tokenError(res) {

export function notValidToken(res) {
 develop
  return res.status(401).json({
    status: 401,
    message: 'The authorization token provided is invalid',
  });
}
 ft-signin-ap-167693020


 develop
export function TokenUnauthorized(res) {
  return res.status(403).json({
    status: 403,
    message: 'You are not authorized to access this resource',
  });
}
 ft-signin-ap-167693020

export function tokenError(res) {
  return res.status(401).json({
    status: 401,
    message: 'The authorization token provided is invalid',
  });
}
develop
