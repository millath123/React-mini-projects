import React, { useState } from 'react';
import './question.css';

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Madrid'],
            answer: 'Paris',
        },
        {
            question: 'What is the largest planet in our solar system?',
            options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
            answer: 'Jupitker',
        },
        {
            question: 'What is the smallest country in the world?',
            options: ['Monaco', 'Vatican City', 'Maldives', 'Nauru'],
            answer: 'Vatican City',
        },
    ];

    const submitButton = (e) => {
        e.preventDefault();
        if (selectedAnswer === questions[activeQuestion].answer) {
            setScore((prev) => ({
                ...prev,
                score: prev.score + 1,
                correctAnswers: prev.correctAnswers + 1,
            }));
        } else {
            setScore((prev) => ({
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1,
            }));
            setShowCorrectAnswer(true);
        }
    };

    const nextQuestion = () => {
        setActiveQuestion((prev) => prev + 1);
        setSelectedAnswer('');
        setShowCorrectAnswer(false);
    };

    if (activeQuestion >= questions.length) {
        return (
            <div>
                <h1>Quiz Finished</h1>
                <p>Your score is {score.score}</p>
                <p>Correct Answers: {score.correctAnswers}</p>
                <p>Wrong Answers: {score.wrongAnswers}</p>
            </div>
        );
    }

    const { question, options, answer } = questions[activeQuestion];

    return (
        <div>
            <h1>Quiz App</h1>
            <h2>{question}</h2>
            <form onSubmit={submitButton}>
                <div>
                    {options.map((item) => (
                        <div key={item}>
                            <input  type="radio" name="answer" value={item} onChange={(e) => setSelectedAnswer(e.target.value)}
                                checked={selectedAnswer === item}
                            />
                            <label>{item}</label>
                        </div>
                    ))}
                </div>
                <button type="submit" disabled={!selectedAnswer}>Submit</button>
            </form>
            {showCorrectAnswer && <p>The correct answer is: {answer}</p>}
            <button onClick={nextQuestion} disabled={!selectedAnswer}>Next</button>
        </div>
    );
};

export default Quiz;
