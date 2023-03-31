const express = require("express");
const { getQuestions } = require('../controllers/quiz-controller');
const router = express.Router();

//Define routes for questions here and this gets binded in server.js file
router.route("/:numberOfQuestions").get(getQuestions);
 
module.exports = router;