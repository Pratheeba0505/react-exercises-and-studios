import { useState } from 'react';

const RecipeAuthor = () => {
   
   let authorLink = "https://www.ambitiouskitchen.com/";
   let authorPhoto = "https://www.ambitiouskitchen.com/brown-butter-chocolate-chip-cookies/";
   let authorName = "Monique Volz";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} 
         width="200px"
         />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a>
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      'coconut oil',
      'dark brown sugar',
      'vanilla',
      'aloman extract',
      'egg',
      'flour',
      'rolled oats',
      'baking soda',
      'salt',
      

   ];

   let ingredientsItems = ingredients.map((ingredient, index) =>{
      return <li key={index}>{ingredient}</li>;
   });
  
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>white chocolate cookies</h1>
            <p> cookies bustring with juicy </p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.ambitiouskitchen.com/brown-butter-chocolate-chip-cookies/" alt="" className="imageUpdates"
   height="450px"
   />
      );
   }

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}