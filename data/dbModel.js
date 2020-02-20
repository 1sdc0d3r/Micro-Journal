const db = require("./dbConfig");

module.exports = {
  getUserById,
  getUser
};

function getUserById(id) {
  return db("User").where({ id });
}

function getUser(username) {
  return db("User").where({ username });
}
