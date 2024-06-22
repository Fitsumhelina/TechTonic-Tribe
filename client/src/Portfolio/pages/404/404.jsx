import React from 'react';
import './404.css';
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <>
      <div className='fof'>404</div>
      <p className='txt'>This Page is not Found Now </p>
      <Link to='/'>
        <button className='not'>Go back</button>
      </Link>
    </>
  );
}

export default Notfound;
