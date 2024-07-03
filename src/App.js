import React from "react";
import Footer from "../src/components/footer/footer";
import Homepage from "./page/Homepage";
import Navbar from "../src/components/Navber/navbar"
import { Route, Routes } from "react-router-dom";
import MCQsingle from "../src/page/Create_Quiz/MCQsingle" 
import Myquiz from "./page/MyQuiz/myquiz";
import Playquiz from "../src/page/playQuiz/playquiz"
import Playquizcard from "./page/playQuiz/playquizcard";
export function App() {
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/create_new" element={<MCQsingle/>} />
        <Route path="/myquiz" element={<Myquiz/>} />
        <Route path="/playquiz" element={<Playquiz/>} />
        <Route path="/play" element={<Playquizcard/>} />
      </Routes>
      <Footer />
    </div>
  )
}


export default App;