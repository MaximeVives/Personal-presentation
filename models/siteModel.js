const database = require('../db/database');

// Get all tasks from database
const getProjects = (callback) => {
  const sql = `SELECT * FROM projects`;
  database.appDatabase.all(sql, [], (error, rows) => {
    if (error) {
      console.error(error.message);
    }
    callback(rows);
  });
};


const createProject = (data, callback) => {
  const sql = `INSERT INTO projects VALUES (NULL, '${data["name"]}', '${data["description"]}', '${data["image"] || "/asset/img/p_1.jpg"}', '${data["main_color"]}', '${data["text_color"]}')`;
  database.appDatabase.run(sql, [], (error, rows) => {
    if (error) {
      console.error(error.message);
    }
    callback(rows);
  });
};

// Export models
module.exports = {
  getProjects,
  createProject
};