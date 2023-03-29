const express = require("express");
const QuestionsRouter = require('./routes/quiz-routes');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json()); 
app.use("/api/questions", QuestionsRouter);
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
});
 
module.exports = app;