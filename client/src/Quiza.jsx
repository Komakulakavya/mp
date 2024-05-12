import React, { useState, useRef, useEffect } from 'react';
import './Quiz.css';
import { data } from './data'; // Adjusted import path
import { useNavigate } from 'react-router-dom';

const Quiza = ({ onQuizComplete }) => {
    const [index, setIndex] = useState(0); // Start from index 0
    const [selectedAnswer, setSelectedAnswer] = useState(null); // State to store selected answer
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
    const [quizCompleted, setQuizCompleted] = useState(false); // State to track quiz completion
    const optionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const navigate = useNavigate();
    const question = data[index]; // Get the current question based on the index

    // Timer function
    useEffect(() => {
        let timer;
        if (!quizCompleted && timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            // Time's up, complete the quiz
            handleQuizCompletion();
        }

        // Cleanup function to clear timer
        return () => clearTimeout(timer);
    }, [timeLeft, quizCompleted]);

    const checkAns = (e, ans) => {
        // Deselect previously selected answer
        if (selectedAnswer !== null) {
            optionRefs[selectedAnswer - 1].current.classList.remove("selected");
        }

        setSelectedAnswer(ans); // Save the selected answer

        if (question.ans === ans) {
            e.target.classList.add("correct");
            setScore(prev => prev + 1);
        } else {
            e.target.classList.add("wrong");
            optionRefs[question.ans - 1].current.classList.add("correct");
        }
    };

    const handleNext = () => {
        // Move to the next question or display the score after the last question
        if (index + 1 < data.length) {
            setIndex(prevIndex => prevIndex + 1);
            setSelectedAnswer(null);
        } else {
            setQuizCompleted(true); // Mark quiz as completed
        }
    };

    const handleQuizCompletion = () => {
        onQuizComplete(); // Callback function to notify completion to the parent component
        navigate('/Home'); // Navigate to home after completion
    };

    // Calculate percentage score
    const percentageScore = (score / data.length) * 100;

    return (
        <div className='container'>
            <h1>Quiz</h1>
            <hr />
            <div>
                <h2>Time Left: {Math.floor(timeLeft / 60)}:{("0" + (timeLeft % 60)).slice(-2)}</h2>
            </div>
            {index < data.length && !quizCompleted && ( // Render questions if index is less than data length and quiz is not completed
                <>
                    <h2>{index + 1}.{question.question}</h2>
                    <ul>
                        <li ref={optionRefs[0]} onClick={(e) => { checkAns(e, 1) }} className={selectedAnswer === 1 ? "selected" : ""}>{question.option1}</li>
                        <li ref={optionRefs[1]} onClick={(e) => { checkAns(e, 2) }} className={selectedAnswer === 2 ? "selected" : ""}>{question.option2}</li>
                        <li ref={optionRefs[2]} onClick={(e) => { checkAns(e, 3) }} className={selectedAnswer === 3 ? "selected" : ""}>{question.option3}</li>
                        <li ref={optionRefs[3]} onClick={(e) => { checkAns(e, 4) }} className={selectedAnswer === 4 ? "selected" : ""}>{question.option4}</li>
                    </ul>
                    <button onClick={handleNext}>Next</button>
                    <div className='index'>{index + 1} of {data.length} questions</div>
                </>
            )}
            {index >= data.length || quizCompleted && ( // Render score if index is greater than or equal to data length or quiz is completed
                <div>
                    <h2>Score: {score} out of {data.length}</h2>
                    <h2>Percentage Score: {percentageScore}%</h2> {/* Display percentage score */}
                    {percentageScore > 50 ? <p>You have cleared the exam!<button onClick={handleQuizCompletion} style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }} >completed</button></p> : <p>You have not cleared the exam.</p>}
                </div>
            )}
        </div>
    );
};

export default Quiza;
