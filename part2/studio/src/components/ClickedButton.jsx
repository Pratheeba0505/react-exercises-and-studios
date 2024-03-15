import './styling.css';

function ClickedButton(){

  function handleClick (){
    alert ("you have removed this pin!");
} 
return (
  < button id ="Clickedbutton" onClick = {handleClick}>
   saved
   </button>
  
 
  );
  } 

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
