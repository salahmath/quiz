import React from 'react';

function Question({ question, selectedOption, setSelectedOption }) {

  // Gérer la sélection de l'option
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h2 className="text-center question">{question.question}</h2>
      <form className="mt-4">
        {question.options.map((option, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name="quiz"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              id={`option-${index}`}
            />

            <label className="form-check-label option" htmlFor={`option-${index}`}>
              {option}
            </label>
            <div className='border1'></div> 
            
          </div>
        ))}
        <h2 className='h2'>question {question.id}</h2>
      </form>
    </div>
  );
}

export default Question;
