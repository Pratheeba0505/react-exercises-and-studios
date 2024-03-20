
import './App.css'
import RecipeDescription from './Description'
import RecipePhoto from './Photos';

function App() {

  return (
   
    <div className="App">
    <div className="recipePhotoBlock"></div>
    <div>
        <RecipePhoto/>
    </div>
    <div>
  <RecipeDescription />
  <RecipeIngredients />
  </div>
  </div>
)
}
 
        

export default App;