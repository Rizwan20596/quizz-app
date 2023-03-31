const express = require("express");
const QuestionsRouter = require('./routes/quiz-routes');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

//using dotenv config file to read port/passwords, just to keep it secure
dotenv.config();

//Using cors to avoid CORS error when API is called
app.use(cors());

//To return/accept the json from frontend
app.use(express.json());

//binding the router to support /api/questions route
app.use("/api/questions", QuestionsRouter);

//Starting the server
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
});
 
module.exports = app;