import React from 'react';
import { Link } from 'react-router-dom';

const Quizs = ({quiz}) => {
  let {logo, id , name,total} = quiz
  return (
    
       <div class="col">
         <div class="card bg-dark">
            <img src={logo} class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title text-info">{name}</h5>
            <p className='fw-bold text-light'>Total Quiz : {total}</p>
            <p class="card-text "><Link to={`/quiz/${id}`}> <button className ='bg-info p-2 border-0 fw-bold'>Start Quiz</button> </Link></p>
         </div>
       </div>
      </div>
  
  );
};

export default Quizs;