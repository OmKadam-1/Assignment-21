import React from 'react'
import "./Registration.css"
import { Link } from 'react-router'
function Registration() {
  const name = localStorage.getItem("name");
  const age = localStorage.getItem("age");
  const city = localStorage.getItem("city");
  const gender = localStorage.getItem("gender") || "Not specified";
  let optionalSubjects = [];

    const storedSub = localStorage.getItem("optionalSubject");
    if (storedSub) {
      optionalSubjects = JSON.parse(storedSub);
  }  else {
    optionalSubjects = [];
  }

  return (
    <div className='registration-completed'>
       <div className='showData'>
       <p>{`Name: ${name}`}</p>
        <p>{`Age: ${age}`}</p>
        <p>{`City: ${city}`}</p>
        <p>{`Gender: ${gender}`}</p>
        <p>{`Optional Subjects: ${optionalSubjects && optionalSubjects.length ? optionalSubjects.join(', ') : 'None'}`}</p>
        
    </div>
        <h1>Completed</h1>
        <p>Thank you </p>
        <Link className="btn" to="/"> Home</Link>
    </div>
  )
}

export default Registration