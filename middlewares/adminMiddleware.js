module.exports = (req, res, next) => {
    console.log('req.user in adminMiddleware:', req.user);
    if (req.user && req.user.role === 'admin') {
        next(); // User is admin, allow access
    } else {
        return res.status(403).json({ error: 'Admin access required' });
    }
};

