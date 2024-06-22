import React from 'react';
import './aboutcard1.css'
const Card1 = () => {
  const data = {
    heading: "Welcome to Techtoic Tribe",
    text: "Welcome to Techtoic Tribe! Our tech club is where tech enthusiasts come together to explore, learn, and create.",
    listItems: [
      {
        id: 1,
        icon: "https://cdn-icons-png.flaticon.com/128/9068/9068676.png",
        title: "Our goal",
        description: "The goal of our tech club is to provide opportunities for learning, collaboration, and innovation."
      },
      {
        id: 2,
        icon: "https://cdn-icons-png.flaticon.com/128/9068/9068676.png",
        title: "What we expect from students",
        description: "Our students need only to bring passion and an interest in innovation to create something new."
      },
      {
        id: 3,
        icon: "https://cdn-icons-png.flaticon.com/128/9068/9068676.png",
        title: "Our suggestion",
        description: "Our suggestion is simple: practice! practice! practice!"
      }
    ],
    imageUrl:"https://img.freepik.com/premium-photo/close-up-cartoon-boy-with-glasses-black-shirt-generative-ai_955884-763.jpg"
  };

  return (
    <div className="card01">
      <hr/>
      <div className="div01">
        <div className="text01">
          <h1 className="text02">{data.heading}</h1>
          <p className="text03">{data.text}</p>
          {data.listItems && data.listItems.length > 0 && (
            <ul className="list1">
              {data.listItems.map((item, index) => (
                <li key={index} className="list-item">
                  <div className="first">
                    <div className="icon1">
                      <img src={item.icon} alt="Icon" className="h-10 w-10" />
                    </div>
                    <div className="l-text01">
                      <h2 className="l-text02">{item.title}</h2>
                      <p className="l-text03">{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="pic01">
          {data.imageUrl && (
            <img src={data.imageUrl} alt="Illustration" className="image" />
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Card1;
