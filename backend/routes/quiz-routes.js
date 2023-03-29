const express = require("express");
const { getQuestions } = require('../controllers/quiz-controller');
 
const router = express.Router();
 
router.route("/:numberOfQuestions").get(getQuestions);
 
module.exports = router;