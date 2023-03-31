import React, { useState } from "react";
import QNAComponent from "../qna/qna-comp";
import PreStartComponent from "../landing/quizz-pre-start";
import ResultsScreen from '../results/resultsScreen'

const QuizzComponent = () => {
    //questions holds the response from the api call.
    const [questions, setQuestions] = useState([]);

    //questIndex holds the active question index
    const [questIndex, setQuestIndex] = useState(0);

    //holds the score of the user
    const [score, setScore] = useState(0);

    //if it is last question we need to show finish instead of the next button
    const [finished, setFinished] = useState(false);

    //need to show the loader till the api response
    const [loader,setLoader] = useState(false);

    //Gets called when user clicks on start test button, makes an api call based on the option selected
    const startTest = (num) => {
        //Show loader on click of start test
        setLoader(true);
        let url = `https://quizz-app-53m6.onrender.com/api/questions/${num}`;
        fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json()).then(json => { 
            //set questions to the current state and disable the loader when the response is set to state
            setQuestions(json.data); 
            setLoader(false) });
    }

    //Gets called on click of next button
    const nextQuestion = () => {
        if (questIndex + 1 < questions.length) {
            setQuestIndex(questIndex + 1);
        } else {
            setFinished(true);
            setQuestIndex(0);
        }
    }

    //If answer is right increase the score to +1
    const increaseScore = () => {
        setScore(score + 1);
    }

    //Reset quiz from results page after test
    const resetQuiz = () => {
        setQuestions([]);
        setQuestIndex(0);
        setScore(0);
        setFinished(false);
        window.sessionStorage.clear();
    }
    
    return (
        <div className="quizz-body">
            {questions.length ?
                (finished ?
                    <ResultsScreen score={score} resetQuiz={resetQuiz} />
                    : <QNAComponent question={questions[questIndex]} nextQuestion={nextQuestion} increaseScore={increaseScore} lastQuestion={questIndex + 1 === questions.length} />)
                :
                <PreStartComponent startTest={startTest} loader={loader}/>
            }
        </div>
    )
}

export default QuizzComponent;