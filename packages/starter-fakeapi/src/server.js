import jsonServer from 'json-server';
import { isAuthenticated, createToken, verifyToken } from './jwt';

const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

server.post('/auth/login', (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = 'Incorrect email or password';
    res.status(status).json({ status, message });
    return;
  }
  const accessToken = createToken({ email, password });
  res.status(200).json({ accessToken });
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(' ')[0] !== 'Token'
  ) {
    const status = 401;
    const message = 'Error in authorization format';
    res.status(status).json({ status, message });
    return;
  }
  try {
    // unsafe authentication - use for simple mock testing
    const token = req.headers.authorization.split(' ')[1];
    if (token) {
      verifyToken(token);
    }
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error accessToken is revoked';
    res.status(status).json({ status, message });
  }
});

server.use(router);

server.listen(3001, () => {
  console.log('Running Auth API Json Server');
});
