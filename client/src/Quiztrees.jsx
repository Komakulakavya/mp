import React, { useState, useRef, useEffect } from 'react';
import './Quiz.css';
import { data } from './data6'; // Adjusted import path
import { useNavigate } from 'react-router-dom';

const Quiztrees = ({ onQuizComplete }) => {
    const [index, setIndex] = useState(0); // Start from index 0
    const [selectedAnswer, setSelectedAnswer] = useState(null); // State to store selected answer
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
    const optionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const navigate = useNavigate();
    const question = data[index]; // Get the current question based on the index// Timer function
    useEffect(() => {
        if (timeLeft === 0) {
            // Time's up, complete the quiz
            handleQuizCompletion();
        } else {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const checkAns = (e, ans) => {
        // Deselect previous selected answer
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
    }

    const handleNext = () => {
        // Move to next question or display score after last question
        if (index + 1 < data.length) {
            setIndex(prevIndex => prevIndex + 1);
            setSelectedAnswer(null);
        } else {
            setIndex(data.length); // Set index to a value greater than data length to display the score
        }
    }
    
    const handleQuizCompletion = () => {
        onQuizComplete(); // Callback function to notify completion to parent component
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
            {index < data.length && ( // Render questions if index is less than data length
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
            {index >= data.length && ( // Render score if index is greater than or equal to data length
                <div>
                    <h2>Score: {score} out of {data.length}</h2>
                    <h2>Percentage Score: {percentageScore}%</h2> {/* Display percentage score */}
                    {percentageScore > 50 ? <p>You have cleared the exam!<button onClick={handleQuizCompletion} style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }} >completed</button></p>  : <p>You have not cleared the exam.</p>}
                </div>
            )}
        </div>
    );
};

export default Quiztrees;
