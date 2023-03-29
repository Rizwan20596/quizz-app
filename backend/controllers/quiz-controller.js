const QuizServices = require('../services/quiz-services');
exports.getQuestions = async (req,res) => {
    try{
        const questions = await QuizServices.getQuestions(req.params.numberOfQuestions);
        res.status(200).json({data: questions, stauts: 200});
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}
  