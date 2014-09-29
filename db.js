var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Page = new Schema({
    page_id         : String,
    page_content    : String,
    page_updated_at : Date
});
 
mongoose.model( 'Page', Page );
mongoose.connect( 'mongodb://localhost/demoapp');