import React, { useState } from 'react';
import Question from './Quetion';
import Result from './result';
import data from '../data/data';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  // Fonction pour gérer la réponse donnée par l'utilisateur
  const handleAnswer = () => {
    if (!selectedOption) return; // Ne rien faire si aucune option n'est sélectionnée

    const correctOption = data[currentQuestion].correctAnswer; // Obtenir la bonne réponse de la question actuelle

    // Vérifier si la réponse pour cette question existe déjà dans `answers`
    const existingAnswerIndex = answers.findIndex(answer => answer.questionId === data[currentQuestion].id);

    if (existingAnswerIndex !== -1) {
      // Si elle existe, la mettre à jour
      const updatedAnswers = [...answers];
      updatedAnswers[existingAnswerIndex] = {
        questionId: data[currentQuestion].id,
        selectedOption,
        isCorrect: selectedOption === correctOption,
      };
      setAnswers(updatedAnswers);
    } else {
      // Si elle n'existe pas, l'ajouter
      setAnswers([
        ...answers,
        {
          questionId: data[currentQuestion].id,
          selectedOption,
          isCorrect: selectedOption === correctOption,
        },
      ]);
    }

    // Si c'est la dernière question, afficher les résultats
    if (currentQuestion === data.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(''); // Réinitialiser l'option sélectionnée pour la question suivante
    }
  };

  // Fonction pour revenir à la question précédente
  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      
      // Rechercher la réponse pour la question précédente
      const previousAnswer = answers.find(answer => answer.questionId === data[currentQuestion - 1].id);
      if (previousAnswer) {
        setSelectedOption(previousAnswer.selectedOption); // Remettre la valeur de la sélection précédente
      }
    }
  };

  // Calcul du score
  const calculateScore = () => {
    return answers.reduce((score, answer) => {
      const correctOption = data.find(q => q.id === answer.questionId).correctAnswer;
      if (answer.selectedOption === correctOption) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  // Si toutes les questions ont été répondues, afficher la page des résultats
  if (showResult) {
    const score = calculateScore();
    return <Result score={score} totalQuestions={data.length} correctAnswers={answers} />;
  }

  return (
    <section className="quiz">
      <h1>Quiz</h1>
      <Question
        question={data[currentQuestion]}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption} // Passer la fonction pour changer selectedOption
      />
      <div className="flex btns">
      {currentQuestion !=0 && <button className="retour" onClick={handlePrev} disabled={currentQuestion === 0}>
          Retour
        </button>}
        
        <button className="next" onClick={handleAnswer}>
          Next
        </button>
      </div>
    </section>
  );
}

export default Quiz;
