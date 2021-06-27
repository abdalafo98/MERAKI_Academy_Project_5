const db = require("./../../db/db");

const addToBreakfast = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `INSERT INTO breakfast (name, user_id) VALUES (?,?)`;
  const data = [name, user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("insert is not done");
    res.status(200).send("insert is done");
  });
};

const addToSnack = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `INSERT INTO snack (name, user_id) VALUES (?,?)`;
  const data = [name, user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("insert is not done");
    res.status(200).send("insert is done");
  });
};

const addToLunch = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `INSERT INTO lunch (name, user_id) VALUES (?,?)`;
  const data = [name, user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("insert is not done");
    res.status(200).send("insert is done");
  });
};

const addToDinner = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `INSERT INTO dinner (name, user_id) VALUES (?,?)`;
  const data = [name, user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("insert is not done");
    res.status(200).send("insert is done");
  });
};
const addToGlassesOfWater = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `INSERT INTO glassesOfWater (name, user_id) VALUES (?,?)`;
  const data = [name, user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("insert is not done");
    res.status(200).send("insert is done");
  });
};

const addToActiveTime = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `INSERT INTO activeTime (name, user_id) VALUES (?,?)`;
  const data = [name, user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("insert is not done");
    res.status(200).send("insert is done");
  });
};

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
    if (err) res.status(500).send("insert is not done");
    res.status(200).json(result);
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
    if (err) res.status(500).send("update is not done");
    res.status(200).json(result);
  });
};

module.exports = {
  createFoodTracker,
  updateFoodTracker,
  addToBreakfast,
  addToSnack,
  addToLunch,
  addToDinner,
  addToGlassesOfWater,
  addToActiveTime,
};
