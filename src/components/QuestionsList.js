//importing react, useState & useEffect
import React, { useState, useEffect }  from 'react'

//importing components
import GameOver from './GameOver'
import questions from './Objects'

//QuestionList component
const QuestionsList = () => {

    //useState to set the states
    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState(0);
    const [pts, setPts] = useState(0);
    const [passed, setPassed] = useState(false);

    //useEffect to setQuiz with the questions array from Object.js component
    useEffect(() => {
        setQuiz(questions)
        
    }, []);

    //handleClick event 
    const handleClick = (e) => {
        //setting the userAnswer to what the user clicks
        let userAnswer = e.target.outerText;

        //if the userAnswer = correct_answer then add a point
        if (questions[number].correct_answer === userAnswer) setPts(pts + 1);

        //if the points = 3 then the user has passed the quiz
        if (pts === 3) setPassed(true);

        //adding 1 to the number to display next question in the array
        setNumber(number + 1);
    }
    
    //List rendering using the map method 
    const newQuestion = quiz.map((question) => 
        <div className="quiz" key={question.id}>

            <div className="question">
                <h3>{question.question}</h3>
            </div>

            <div className="options">
                <button onClick={handleClick}>{question.correct_answer}</button>
                <button onClick={handleClick}>{question.incorrect_answer1}</button>
                <button onClick={handleClick}>{question.incorrect_answer2}</button>
                <button onClick={handleClick}>{question.incorrect_answer3}</button>
            </div>
            
        </div>
    );

    //rendering the component 
    return (
        <div >
            {newQuestion[number]}
            {number === 5 && <GameOver pts={pts} passed={passed} />}
        </div>
    )
}

export default QuestionsList
