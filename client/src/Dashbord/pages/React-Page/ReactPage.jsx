import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './React.module.css';  
import SideBar from '../../component/bars/SideBar/SideBar';
import Banner from '../../component/cards/banner/banner';
import VideoCard from '../../component/cards/VideoCard/VideoCard';
import TextCard from '../../component/cards/text/text';
import Button from '../../component/button/button/button';
function Reactpage() {
  const [beginnerVideos, setBeginnerVideos] = useState([]);
  const [intermediateVideos, setIntermediateVideos] = useState([]);
  const [advancedVideos, setAdvancedVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const beginnerResponse = await axios.get('http://localhost:5000/api/videos/react/beginner');
        setBeginnerVideos(beginnerResponse.data);

        const intermediateResponse = await axios.get('http://localhost:5000/api/videos/react/intermediate');
        setIntermediateVideos(intermediateResponse.data);

        const advancedResponse = await axios.get('http://localhost:5000/api/videos/react/advanced');
        setAdvancedVideos(advancedResponse.data);
      } catch (error) {
        console.error('Error fetching React videos:', error);
        setError('Failed to load videos. Please try again later.');
      }
    };
    fetchVideos();
  }, []);

  const longText = `
  Creating and nesting components 
React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

React components are JavaScript functions that return markup:

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
Now that you’ve declared MyButton, you can nest it into another component:

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
Notice that <MyButton /> starts with a capital letter. That’s how you know it’s a React component. React component names must always start with a capital letter, while HTML tags must be lowercase.
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
  Writing markup with JSX 
The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box.

JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
  Adding styles 
In React, you specify a CSS class with className. It works the same way as the HTML class attribute:

<img className="avatar" />
Then you write the CSS rules for it in a separate CSS file:

/* In your CSS */
.avatar {
  border-radius: 50%;
}
  React does not prescribe how you add CSS files. In the simplest case, you’ll add a <link> tag to your HTML. If you use a build tool or a framework, consult its documentation to learn how to add a CSS file to your project.

Displaying data 
JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. For example, this will display user.name:

return (
  <h1>
    {user.name}
  </h1>
);
You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes. For example, className="avatar" passes the "avatar" string as the CSS class, but src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute:

return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
Conditional rendering 
In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX:

let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
If you prefer more compact code, you can use the conditional ? operator. Unlike if, it works inside JSX:

<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
When you don’t need the else branch, you can also use a shorter logical && syntax:

<div>
  {isLoggedIn && <AdminPanel />}
</div>
All of these approaches also work for conditionally specifying attributes. If you’re unfamiliar with some of this JavaScript syntax, you can start by always using if...else.

Rendering lists 
You will rely on JavaScript features like for loop and the array map() function to render lists of components.

For example, let’s say you have an array of products:

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
Inside your component, use the map() function to transform an array of products into an array of <li> items:

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
Notice how <li> has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

  `;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.body}>
        <div className={styles.upper}>
          <Banner
            title="Welcome to  REACT"
            subtitle="What do you think about REACT?  🤔 "
            buttonText="More About me"
            buttonLink="https://www.w3schools.com/react/default.asp" 
            backgroundImage="https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
        <div className={styles.bottom}>
          {error ? (
            <p className={styles.error}>{error}</p>
          ) : (
            <>
              <div className={styles.videoSection}>
                <h2>Beginner Videos</h2>
                <div className={styles.videos}>
                {beginnerVideos.map(video => (
            <VideoCard key={video._id}  Title={video.topic} videoLink={video.videoLink} description={video.description} />
          ))}
                </div>
              </div>
              <div className={styles.videoSection}>
                <h2>Intermediate Videos</h2>
                <div className={styles.videos}>
                {intermediateVideos.map(video => (
            <VideoCard key={video._id}  Title={video.topic} videoLink={video.videoLink} description={video.description} />
          ))}
                </div>
              </div>
              <div className={styles.videoSection}>
                <h2>Advanced Videos</h2>
                <div className={styles.videos}>
                {advancedVideos.map(video => (
            <VideoCard key={video._id}  Title={video.topic} videoLink={video.videoLink} description={video.description} />
          ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.text}>
         
          <TextCard 
            title="⭐⭐SUMMARY OF REACT⭐⭐"
            text={longText}
          />

         
         
        
        </div>
     
      </div>
    </div>
  );
}

export default Reactpage;
