import React from 'react';
import './aboutcard3.css'

const Card3 = () => {
  const data = {
    heading: "Programs in Techtoic Tribe",
    text: "Let's explore our programs",
    listItems: [
      {
        id: 1,
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
        title: "Phase 1: Building Python Code",
        description: "Learn the basics of object-oriented programming in Python."
      },
      {
        id: 2,
        icon: "https://t3.ftcdn.net/jpg/02/49/94/32/240_F_249943294_eNaSuA7290IzaryLuBBeCcSgjVuxMBYr.jpg",
        title: "Phase 2: Learning HTML, CSS, and JavaScript",
        description: "Learn the fundamentals of using JavaScript, with a hackathon in the final section."
      },
      {
        id: 3,
        icon: "https://t3.ftcdn.net/jpg/03/04/97/12/240_F_304971233_mQ4xlfnBGSszgzJPYzQnZtWI04ZNmuuP.jpg",
        title: "Phase 3: React.js, Node.js, Express.js, MongoDB",
        description: "Learn the backend of website development."
      },
      {
        id: 4,
        icon: "https://cdn-icons-png.flaticon.com/128/5433/5433707.png",
        title: "Phase 4: The Project Phase",
        description: "Building a Fullstack website."
      }
    ],
    imageUrl: "https://th.bing.com/th/id/OIP.dBSShGfhbNL3Es-l9itqkAHaHa?rs=1&pid=ImgDetMain"
  };

  return (
    <div className="card13">
      <hr/>      <div className="div3">
        <div className="text3">
          {/* Display the heading */}
          <h1 className="text31">{data.heading}</h1>
          <p className="text32">{data.text}</p>
          {data.listItems && data.listItems.length > 0 && (
            <ul className="list3">
              {data.listItems.map((item, index) => (
                <li key={index} className="list-item">
                  <div className="thired">
                    <div className="icon3">
                      <img src={item.icon} alt="Icon" className="h-10 w-10" />
                    </div>
                    <div className="l-text3">
                      <h2 className="l-text31">{item.title}</h2>
                      <p className="l-text32">{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="pic3">
          {data.imageUrl && <img src={data.imageUrl} alt="Illustration" className="image" />}
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default Card3;
