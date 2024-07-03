import React, { useRef } from "react";
import "./playquiz.css"
import {getName, playQuiz} from "../../Redux/Actions/Actions"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Playquiz = () => {
  const quiz = useSelector((state) => state.reducer.quiz);
  const name = useRef();
  const dispatah = useDispatch();
  const navgate = useNavigate()

  const play = (id) => {  //this function will run when the card is clicked. 
    if (name.current.value === "") {
      alert("Please enter a name!");
      return;
    }
    if(name.current.value.length<5 || name.current.value>50){
      return alert("Enter a valid name between 5 and 50 characters!")
    }
    else{
      dispatah(getName(name.current.value)); 
      dispatah(playQuiz(id));
      navgate("/play");
    }
  }

  return (
    <div className="main">
      <div className="heading">
        <h1>Play Quiz</h1>
      </div>
      <div className="quizd">
        <h3>Enter your name and select your Quiz</h3>
      </div>
      <p style={{display:"flex", justifyContent:"center", fontWeight:"bold"}}>Enter a name</p>
      <div className="enter">
        <input
          type="text"
          placeholder="Name"
          className="namet"
          required 
          ref={name} />
      </div>
      <div>
        { quiz.length === 0 ? (
        <h5 style={{display: "flex", justifyContent: "center", color: "black" }}>currently there are no Quiz</h5> 
        ) : ( 
        <div>
          { quiz.filter((el) => el.isActive === true).map((el) => (
            <div
            className="quiz_title"
            onClick={() => {play(el.id)}} >
              <div style={{cursor:"pointer"}}>{el.title}</div>
            </div>
          ))}
        </div>
        )}
      </div>

    </div>
  )
}

export default Playquiz;