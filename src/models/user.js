// import node modules
const mongoose = require('mongoose');

// define a schema
const UserModelSchema = new mongoose.Schema ({
  name        	: String,
  googleid     	: String,
  last_post   	: String,
  saved_posts	: [String]
});

// compile model from schema
module.exports = mongoose.model('UserModel', UserModelSchema);
