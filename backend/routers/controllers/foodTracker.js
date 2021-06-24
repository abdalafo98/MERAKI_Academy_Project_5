const db = require("./../../db/db");

const createFoodTracker = (req, res) => {
  const user_id = req.token.id;
  const { breakfast, snack, lunch, dinner, glassesOfWater, activeTime } =
    req.body;

  const query = `INSERT INTO foodTraker (breakfast,snack,lunch,dinner,glassesOfWater,activeTime,user_id) VALUES (?,?,?,?,?,?,?)`;
  const data = [
    breakfast,
    snack,
    lunch,
    dinner,
    glassesOfWater,
    activeTime,
    user_id,
  ];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};

const updateFoodTracker = (req, res) => {
  const user_id = req.token.id;
  const { breakfast, snack, lunch, dinner, glassesOfWater, activeTime } =
    req.body;
  const query = `UPDATE foodTraker SET
  breakfast=?,snack=?,lunch=?,dinner=?,glassesOfWater=?,activeTime=? WHERE user_id=?`;
  const data = [
    breakfast,
    snack,
    lunch,
    dinner,
    glassesOfWater,
    activeTime,
    user_id,
  ];

  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
  createFoodTracker,
  updateFoodTracker,
};
