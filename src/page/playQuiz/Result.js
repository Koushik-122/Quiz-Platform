import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetQuiz } from "../../Redux/Actions/Actions";
import { Button } from "@mui/material";
import "./Resultstyle.css"

const Result = (props) => {
  const Result = useSelector((state) => state.reducer.answers);
  const Map = Result.map((el) => el.isCorrect);
  const navgate = useNavigate();
  const dispatch = useDispatch();

  const resethander = () => {
    dispatch(resetQuiz());
    navgate("/");
  }

  return (
    <div className="Result-Container">
      <div className="container">
        <div className="name">
          <h1>Hii ! {props.name}</h1>
        </div>
        <div className="img"></div>
        <div className="cong">
          <h1>Congratulation !</h1>
          <h1>Your score is {Map.filter((el) => el === true).length} out of {Map.length} </h1>
        </div>
        <Button className="Done"
          variant="contained"
          onClick={() => resethander()}>Done</Button>
      </div>
    </div>
  )
}

export default Result;