var mongoose = require( 'mongoose' );
var Page     = mongoose.model( 'Page' );

var express = require('express');
var router = express.Router();

/* GET Services. */
router.get('/', function(req, res, next) {
  Page.
    find({ page_id : "Services" }).
    sort().
    exec( function ( err, pages ){
      if( err ) return next( err );
      res.render( 'services', {
          title : '',
          pages : pages
      });
    });
});

module.exports = router;