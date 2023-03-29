import React, { useEffect, useState } from "react";
import QNAComponent from "./qna-comp";
import PreStartComponent from "./quizz-pre-start";
import ResultsScreen from './resultsScreen'

const QuizzComponent = () => {
    const [questions, setQuestions] = useState([]);
    const [questIndex, setQuestIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const startTest = (num) => {
        let url = `https://quizz-app-53m6.onrender.com/api/questions/${num}`;
        fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json()).then(json => { setQuestions(json.data); });
    }

    const nextQuestion = () => {
        if (questIndex + 1 < questions.length) {
            setQuestIndex(questIndex + 1);
        } else {
            setFinished(true);
            setQuestIndex(0);
        }
    }

    const increaseScore = () => {
        setScore(score + 1);
    }

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
                <PreStartComponent startTest={startTest} />
            }
        </div>
    )
}

export default QuizzComponent;