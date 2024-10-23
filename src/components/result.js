import React from 'react';

function Result({ score, totalQuestions, correctAnswers }) {
  console.log(score);
  return (
    <div className="container mt-5 text-center">
      <h1>Résultats du Quiz</h1>
      <h2>Votre score : {score}/{totalQuestions}</h2>
      <div className="mt-4">
        <h3>Détail des réponses :</h3>
        <ul className="list-group">
          {correctAnswers.map((answer, index) => (
            <li key={index} className={`list-group-item ${answer.isCorrect ? 'list-group-item-success' : 'list-group-item-danger'}`}>
              Question {index + 1}: {answer.isCorrect ? 'Correct' : 'Incorrect'}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <button className="btn btn-primary" onClick={() => window.location.reload()}>Recommencer le Quiz</button>
      </div>
    </div>
  );
}

export default Result;
