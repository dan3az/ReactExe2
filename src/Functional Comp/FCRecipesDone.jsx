

import FCRecipe from "./FCRecipe"


export default function FCRecipesDone(props) {


  const getIdFromRecipe2DEat = (name,img,description) => {
    props.sendname2EatFromRecipe(name,img,description);
  }

let resipeStr=props.recipesDone.map((recipe)=>{
return <FCRecipe img={recipe.img} name={recipe.name} description={recipe.description} ready={recipe.ready} getIdFromRecipe2DEat={getIdFromRecipe2DEat} />}
)


  return (

    <div className='row'>{resipeStr}</div>
    );
}