import React from 'react';
import './aboutcard4.css'

const Card4 = () => {
  const data = {
    heading: "Our future plan",
    text:  "In our club, we have ambitious plans for the future, aiming to take our commitment to innovation and collaboration to the next level.",
    listItems:  [
      {
        id: 1,
        icon: "https://cdn-icons-png.flaticon.com/128/59/59118.png",
        title: "National Competitions",
        description: "We aim to go global, engaging with international tech clubs."
      },
      {
        id: 2,
        icon: "https://cdn-icons-png.flaticon.com/128/59/59118.png",
        title: "International Opportunities",
        description: "We're gearing up to join national competitions."
      },
      {
        id: 3,
        icon: "https://cdn-icons-png.flaticon.com/128/59/59118.png",
        title: "Knowledge Sharing and Collaboration",
        description: "As we expand, we're collaborating with other university clubs to share knowledge."
      }
    ],
    imageUrl: "https://www.evangadi.com/themes/humans/assets/hammerlook/img/misc/3-steps9.jpg"
  };

  return (
    <div className="card4">
      <div className="div4">
        <div className="pic4">
          {data.imageUrl && <img src={data.imageUrl} alt="Illustration" className="image" />}
        </div>
        <div className="text4">
          <h1 className="text41">{data.heading}</h1>
          <p className="text42">{data.text}</p>
          
          {/* Display the list of items */}
          {data.listItems && data.listItems.length > 0 && (
            <ul className="list4">
              {data.listItems.map((item, index) => (
                <li key={index}>
                  <div className="fourth">
                    <div className="icon4">
                      <img src={item.icon} alt="Icon" className="h-10 w-10" />
                    </div>
                    <div className="l-text4">
                      <h2 className="l-text41">{item.title}</h2>
                      <p className="l-text42">{item.description}</p>
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

export default Card4;
