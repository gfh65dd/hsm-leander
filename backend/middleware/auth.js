const protect = (req, res, next) => {
  const adminSecret = req.headers['x-admin-secret'];
  const VALID_PASSWORD = process.env.ADMIN_SECRET;

  if (adminSecret && adminSecret === VALID_PASSWORD) {
    next();
  } else {
    res.status(401).json({ error: 'Access Denied: Invalid Secret Key' });
  }
};

module.exports = { protect };