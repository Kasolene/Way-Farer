import jwt from 'jsonwebtoken';

export default function createToken(email) {
  const token = jwt.sign({ id: email },
     'nicolas',
    {
      expiresIn: '24h',
    });

  return token;
}