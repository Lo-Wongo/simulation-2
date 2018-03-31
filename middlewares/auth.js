module.exports = ( req, res, next ) => {
    if ( req.path.includes('properties') ) {
      if ( req.session.user ) {
        next();
      } else {
        res.status(500).send('Not authorized.');
      }
    } else {
      next();
    }
  };