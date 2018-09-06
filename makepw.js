const bcrypt = require('bcrypt');
const pw = process.argv[2];

bcrypt.hash(pw, 10, function(err, hash) {
  console.log(hash);
});
