import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Dashbordheader from './../dashbord/dashbordheader.jsx';
import LoginHeader from './../login/loginheader.jsx'; // Create and import your LoginHeader
import ChatHeader from './../chatpage/chatpageheader.jsx'; // Create and import your ChatHeader
import BlogHeader from '../../../../blog/components/Header.jsx';

const MainHeader = () => {
  
    const location = useLocation();
  
    if (location.pathname.startsWith('/dashboard')) {
      return <Dashbordheader />;
    } else if (location.pathname === '/login') {
      return <LoginHeader />;
    }

    else if (location.pathname === '/chat') {
      return <ChatHeader />;
    }
    return null;
  };
  
  export default MainHeader;
  
  
