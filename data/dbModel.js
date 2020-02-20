const db = require("./dbConfig");

module.exports = {
  getUser
};

function getUser(id) {
  return db("User").where({ id });
}
