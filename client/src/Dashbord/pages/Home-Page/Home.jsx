import React from 'react';
import SideBar from '../../component/bars/SideBar/SideBar';
import styles from './Home.module.css';
import SearchBar from '../../component/button/SearchBarBotton/SearchBar';
import ShortFileCard1 from '../../component/cards/FileCards/samplecards/ShortFileCard1';
import DHeader from '../../component/cards/header/header';
import Icon from '../../component/cards/icon/icon';

function Home() {
  return (

    <div className={styles.container}>
      <div className={styles.Sidebar}><SideBar/></div>
      <div className={styles.rigth}>
      <div className={styles.bottomcontainer}>
      <div className={styles.searchbar}>
          {/* <SearchBar/> */}
      </div>
    <div className={styles.icons}>
     < a href="https://html.com">
      <Icon className={styles.icon}
      url="https://cdn-icons-png.flaticon.com/128/569/569835.png"/>
       </a>
       <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
      <Icon className={styles.icon}
      url="https://cdn-icons-png.flaticon.com/128/13904/13904012.png"/>
      </a>
      <a href="https://react.dev/learn">
      <Icon className={styles.icon}
      url="https://cdn-icons-png.flaticon.com/128/3459/3459528.png"/>
      </a>
      <a href="https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-nodejs">
      <Icon className={styles.icon}
      url="https://cdn-icons-png.flaticon.com/128/15484/15484303.png"/>
      </a>
      <a href="https://www.ibm.com/topics/mongodb">
      <Icon className={styles.icon}
      url="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png"/>
      </a>

    </div>
    <br />
    <br />
    <hr />
        <div className={styles.card}>
          <div className={styles.group1}>

        <ShortFileCard1
                title="VS Code "
                description="Visual Studio Code (VS Code) is a powerful, open-source code editor developed by Microsoft. It supports a wide range of programming languages and comes with built-in features like debugging, syntax highlighting, and Git integration. With a rich ecosystem of extensions, VS Code is customizable to fit any developer's workflow."
                image="https://th.bing.com/th/id/OIG4.FE0ehUBdbIJTvaWYioh.?pid=ImgGn"
                link= "https://www.educative.io/answers/what-is-visual-studio-code"
            />
        <ShortFileCard1
                title="Website Development "
                description="Website development involves creating and maintaining websites, encompassing aspects like web design, web publishing, web programming, and database management. It requires proficiency in languages like HTML, CSS, and JavaScript, as well as frameworks like WordPress and Django. Effective website development ensures optimal user experience and functionality.."
                image="https://th.bing.com/th/id/OIG4.itV4LKF71sQy7U0ICnpE?pid=ImgGn"
                link="https://brainstation.io/career-guides/what-is-web-development"
                />
          </div>
          <div className={styles.group2}>

        <ShortFileCard1
                title="MERN STACK"
                description="The MERN stack is a popular web development framework that includes MongoDB, Express.js, React, and Node.js. It allows developers to build full-stack applications using JavaScript across the entire development process. The stack provides a seamless integration between front-end and back-end components, enhancing development efficiency."
                image="https://th.bing.com/th/id/OIG4.bQWB5RDscZUzMUQyMjoK?pid=ImgGn"
                link="https://www.mongodb.com/resources/languages/mern-stack"
                />
        <ShortFileCard1
                title="coding"
                description="Coding is the process of writing instructions for computers to perform specific tasks. It involves using programming languages like Python, JavaScript, and C++ to create software applications, scripts, and websites. Coding is fundamental to technology development and enables innovation in various fields.."
                image="https://th.bing.com/th/id/OIG4.uTqTbDwySCyko1SwYP5.?pid=ImgGn"
                link="https://www.computerscience.org/resources/what-is-coding-used-for/"
                />
                </div>
        </div>
        <br />
        <br />
        <hr />
 
      </div>
    <br />
    <div className={styles.header}>
    <DHeader/>
    </div>
      </div>
    
    </div>
  );
}

export default Home
