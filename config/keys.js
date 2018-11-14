// module.exports = {
//   mongoURI: "mongodb://hung:hungnguyen96@ds261253.mlab.com:61253/innoproject",
//   secretOrKey: "secret"
// };

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}
