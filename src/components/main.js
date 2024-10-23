import React from 'react';
import { Link } from 'react-router-dom'
function Main() {
  return (
    <main>
      <h1 className='title'>Quiz by Salah</h1>
      <ol>
        <li>Chaque question a un temps limite de 30 secondes.</li>
        <div className='border' />

        <li>Les réponses correctes donnent 10 points.</li>
        <div className='border' />

        <li>Il n'y a pas de points négatifs pour les mauvaises réponses.</li>
        <div className='border' />

        <li>Le quiz contient 10 questions.</li>
        <div className='border' />

      </ol>

      <div className='button'>
        <input type='text' placeholder='Entrez votre nom' />
      </div>

      <div className='btn'>
        <Link to={"quiz"}>
            star quiz
        </Link>
      </div>
    </main>
  );
}

export default Main;
