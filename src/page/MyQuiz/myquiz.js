import { Button, Switch } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuiz, toggleActive } from "../../Redux/Actions/Actions";
import DeleteIcon from '@mui/icons-material/Delete'
import "./myquiz.css"
import ModeIcon from '@mui/icons-material/Mode';

const Myquiz = () => {
  const dispatch = useDispatch()
  const [modal, setmodal] = useState(false)
  const [Delete, setDelete] = useState()
  const navgate = useNavigate()

  const handerDelete = (id) => {
    setDelete(id)
    setmodal(true);
  };
  const Deleteyeshander = () => {
    dispatch(deleteQuiz(Delete));
    setmodal(false);
  };

  const togglehander = (id) => {
    dispatch(toggleActive(id))
  }
  const Quiz = useSelector((state) => state.reducer.quiz);

  const playhander = () => {
    navgate("/playquiz")
  }

  return (
    <div className="main_body" >
      <div className="heading">
        <h1>My Quiz</h1>
      </div>
      <div className="btn">
        <Button
          component={Link}
          to={"/create_new"}
          variant="contained"
          style={{margin:"10px"}}>
          Create New Quiz
        </Button>
      </div>
      {modal === true ? (
        <div className="delete">
          <h2>do you really want to delete the Quiz !</h2>
          <div className="deletebtn">
            <Button variant="contained" onClick={() => Deleteyeshander()}>yes</Button>
            <Button onClick={() => setmodal(false)}>no</Button>
          </div>
        </div>
      ) : (
        <div>
          {Quiz.length === 0 ? (
            <p style={{color: "red"}}>currently there are no Quiz</p>
          ) : (
            <div className="quiz_table">
              <table>
                <thead>
                  <tr className="table-sno tableHead">
                    <th>Quiz no</th>
                    <th>Title</th>
                    <th>status</th>
                    <th>created on</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                {Quiz.map((el, i) => (
                  <tbody key={i} >
                    <tr className="table-sno">
                      <td>{i + 1}</td>
                      <td className="Title">{el.title}</td>
                      <td>
                        <div>
                        {el.isActive ? (
                              <span className="active">Active</span>
                            ) : (
                              <span className="active">Inactive</span>
                            )}
                          <Switch 
                          defaultChecked
                          color="success"
                          onClick={() => togglehander(el.id)} />
                        </div>
                      </td>
                      <td>
                        {el.createdOn.getDate()}/{el.createdOn.getMonth()}/{el.createdOn.getFullYear()}
                      </td>
                      <td>
                        <Button onClick={() => playhander(el.id)}>
                          <ModeIcon />
                        </Button>
                        <Button onClick={() => handerDelete(el.id)}>
                          <DeleteIcon />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          )
          }
        </div>
      )
      }

    </div>
  )
}

export default Myquiz;