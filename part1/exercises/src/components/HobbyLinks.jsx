import React from 'react';
import classes from './HobbyLinks.module.css';
class HobbyLinks extends React.Component {
    render() {
        const hobby = ["Reading Books", "Watching Movies"];
        return (
        <div>  
            
           <h3 className = {classes.hobbyHeading}>My Hobbys</h3>
           
           <li className={classes.hobbyText}>{hobby[0]}</li>
           <li className={classes.hobbyText}>{hobby[1]}</li>
            
           
        </div>
        );
     }
  }
  
  export default HobbyLinks;