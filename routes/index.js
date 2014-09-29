var mongoose = require( 'mongoose' );
var Page     = mongoose.model( 'Page' );

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Page.
    find({ page_id : "Home" }).
    sort().
    exec( function ( err, pages ){
      if( err ) return next( err );
      res.render( 'index', {
          title : 'Express Todo Example',
          pages : pages
      });
    });
});

module.exports = router;
