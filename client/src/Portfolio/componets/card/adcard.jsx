import React from 'react';
import './adcard.css';
import chat1 from './../../../assets/chat.png';
import chat2 from './../../../assets/chat2.png';
import Signup from '../button/signup';
import { useUserStore } from './../../../../../server/lib/userStore.js'; // Adjust the path as per your file structure


function Adcard() {
    const { currentUser } = useUserStore(); // Get currentUser from the store
    const buttonData=currentUser? [
        {
         name:"Chat Now",
         link:"/chat"
        }
    ] : [
        {
          name: 'Log In',
          link: "/login"
        }
      ];

    return (
        <div className='main'>
            <div className='left'>
                <img src={chat1} alt="avatar" />
            </div>
            <div className='middle'>
                <h1> 👋 Hello There </h1>
                <h3> Do You Want To Chat With Your Friend?</h3>
                <div className='signup'>
                {buttonData.map((data, index) => (
                <Signup
                  key={index}
                  Name={data.name}
                  link={data.link}
                />
              ))}
                </div>
            </div>
            <div className='right'>
                <img src={chat2} alt="avatar" />
            </div>
        </div>
    );
}

export default Adcard;
