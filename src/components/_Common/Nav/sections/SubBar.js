import React from 'react';
import './Nav.css'

const SubBar = (props) => {

  switch ("{props.name}") {
    case "company":
      console.log("company")
      break;
  
    default:
      break;
  }

  return (
    <div className='SubBar'>
 
    </div>
  );
};

export default SubBar;