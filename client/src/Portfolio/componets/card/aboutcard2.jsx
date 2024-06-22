import React from 'react';
import './aboutcard2.css'
const Card2 = () => {
  const data = {
    heading:  "Why students choose our club",
    text:  "",
    listItems:  [
      {
        id: 1,
        icon: "https://cdn-icons-png.flaticon.com/128/10542/10542430.png",
        title: "Our uniqueness",
        description: "Students choose our club because we offer a welcoming, family-like environment."
      },
      {
        id: 2,
        icon: "https://cdn-icons-png.flaticon.com/128/10542/10542430.png",
        title: "Why us",
        description: "We value curiosity and encourage exploration."
      },
      {
        id: 3,
        icon: "https://cdn-icons-png.flaticon.com/128/10542/10542430.png",
        title: "Our first priority",
        description: "Equal educational access for all students is crucial."
      }
    ],
    imageUrl: "https://thumbs.dreamstime.com/b/d-programmer-male-character-python-code-sign-vector-cartoon-young-webdesign-freelancer-laptop-remote-technology-worker-sitting-man-270785673.jpg"
  };

  return (
    <div className="card12">
      <div className="div2">
        <div className="pic2">
          {/* Display the image */}
          {data.imageUrl && <img src={data.imageUrl} alt="Illustration" className="image" />}
        </div>
        <div className="text2">
          <h1 className="text21">{data.heading}</h1>
          <p className="text22">{data.text}</p>
          
          {/* Display the list of items */}
          {data.listItems && data.listItems.length > 0 && (
            <ul className="list2">
              {data.listItems.map((item, index) => (
                <li key={index}>
                  <div className="second">
                    <div className="icon2">
                      <img src={item.icon} alt="Icon" className="h-10 w-10" />
                    </div>
                    <div className="l-text2">
                      <h2 className="l-text21">{item.title}</h2>
                      <p className="l-text22">{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default Card2;
