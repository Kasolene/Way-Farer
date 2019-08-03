const jwt =require ('jsonwebtoken');

class Authentication {
  /**
   * Generate token based on payload.
   *
   * @param {*} id
   * @param {*} email
   * @param {*} is_admin
   */
  static generateToken(id, email, is_admin) {
    const token = jwt.sign(
      {
        id,
        email,
        is_admin,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '24h',
      },
    );

    return token;
  }

  /**
   * Verifies user provided token
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static async verifyToken(req, res, next) {
    const token = req.headers.token || req.body.token;

    // check if token is provided
    if (!token) {
      return res.status(403).json({
        status: 403,
        error: 'Unauthorized!, you have to login',
      });
    }

    try {
      // verify user provided token against existing token
      const decoded = await jwt.verify(token, process.env.SECRET_KEY);

      const queryString = 'SELECT * FROM users WHERE id = $1';
      const { rows } = await Db.query(queryString, [decoded.id]);

      // check for valid app users
      if (!rows[0]) {
        return res.status(401).json({
          status: 401,
          error: 'The token you provided is invalid',
        });
      }

      // get user id
      req.user = decoded;

      return next();
    } catch (errors) {
      if (errors.name === 'TokenExpiredError') {
        return res.status(409).json({
          status: 'error',
          error: 'Token Expired, please re log in',
        });
      }
      return res.status(400).json({
        status: 400,
        error: 'something went wrong, retry or contact admin',
      });
    }
  }
}

module.exports = Authentication;