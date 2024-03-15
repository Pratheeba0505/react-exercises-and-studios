 import styles from './Description.module.css';
 import react from 'react';
 const ReceipeAuthor = () => {
 let receipe =  " white chocolate cookies";
 let receipeShortDesc = "white chocolate,coconut,bluberry";
let authorLink =" https://www.ambitiouskitchen.com/";
let authorPhoto  = " https://www.ambitiouskitchen.com/wp-content/uploads/fly-images/87525/9780593581650-1-918x1138-1-105x0.png" ;
let authorName = " Montique";
return (
    <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt ={authorName}  className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}> Ambitious kitchen </a>
      </div>
   </div>
);
class ReceipeDescriptipon extends React.Component{
  render(){
return(
    <div>
        <div>
            <h1> { receipeTitle} </h1>
            <p> { receipeShortDes} </p>
        </div>
        <ReceipeAuthor/>
    </div>
);
 

}
} 
export  default ReceipeDescription;
