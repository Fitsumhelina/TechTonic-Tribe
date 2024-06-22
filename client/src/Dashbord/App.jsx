import React from "react";
import Home from "./pages/Home-Page/Home";
import Mongo from './pages/Mongo-page/Mongo';
import Html from './pages/Html-Page/Html';
import Css from './pages/CSS-Page/Css';
import ReactPage from './pages/React-Page/ReactPage'; 
import Node from './pages/Node.js-Page/Node';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ChatApp from "../ReactChat/App";
import QuestionPage from "./pages/Question-Page/QuestionPage";
import Notfound from "../Portfolio/pages/404/404";

const DashbordApp  = () => {
  return (
   
   <>
        <Routes>
          <Route path="/" element={<Home/>} />
        <Route path="*" element={<Notfound />} />
          <Route path="/Mongo" element={<Mongo/>} />
          <Route path="/Html" element={<Html/>} />
          <Route path="/Css" element={<Css/>} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/Reactpage" element={<ReactPage/>} />
          <Route path="/Node" element={<Node/>} />
        </Routes>
   </>
  );
};

function ReactChat(){
  return(
    <ChatApp/>
  );
  }

export default DashbordApp ;
