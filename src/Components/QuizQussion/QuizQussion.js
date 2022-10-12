import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizList from '../QuizList/QuizList';



const QuizQussion = () => {
  let qussions = useLoaderData(); 
  let quss = qussions.data.questions
  console.log(quss.correctAnswer)
  
  return (
  <div className='container mt-5 mb-3'>
    <h3 className='text-success m-3'>{qussions.data.name} Quiz</h3>
      <div className="row row-cols-1 row-cols-md-2 g-4">
      
       {
       
       quss.map(qus => <QuizList qus={qus} key={qus.id} questions={qussions}></QuizList>)
        
       }
       
    </div>
  </div>
  );
};

export default QuizQussion;