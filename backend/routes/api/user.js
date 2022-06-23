const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

// Signup
router.post('/', asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.signup({ username, email, password });
  await setTokenCookie(res, user);
  return res.json({ user });
}));

module.exports = router;
