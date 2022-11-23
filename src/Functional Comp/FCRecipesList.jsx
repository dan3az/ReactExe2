import FCRecipe from "..//Functional Comp//FCRecipe"


export default function FCRecipesList(props) {


  const getIdFromRecipe2Delete = (name,img,description) => {
    props.sendname2DeleteFromRecipe(name,img,description);
  }



let resipeStr=props.myKitchen.map((recipe)=>{
return  <FCRecipe img={recipe.img} name={recipe.name} description={recipe.description} ready={recipe.ready} getIdFromRecipe2Delete={getIdFromRecipe2Delete}/>}
)


  return (

    <div className='row'>{resipeStr}</div>
  )
}
