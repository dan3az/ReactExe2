

 function FCRecipe(props) {



  const btnPrepareDish = () => {
    props.getIdFromRecipe2Delete(props.name, props.img,props.description);
  }
  const btnEat=()=>{
    props.getIdFromRecipe2DEat(props.name, props.img,props.description);
  }

  if(props.ready===false)
  {
    return (
        <div className="card col-xs-8 card col-sm-10 card col-lg-3 col-md-3" style={{padding:0 , margin:10}}> 
        <img className="card-img-top" src={props.img} alt="Card image"/>
        <div className="card-body">
         <h4 className="card-title">{props.name}</h4>
         <p className="card-text">{props.description}</p>
         <button className="buttonPrepare" onClick={btnPrepareDish}>Prepare dish</button>
         </div>
        </div>
       
        
    );
  }
  else
  {
    return (
      <div className="card col-xs-8 card col-sm-10 card col-lg-3 col-md-3" style={{padding:0, margin:10}}> 
      <img className="card-img-top" src={props.img} alt="Card image"/>
      <div className="card-body">
       <h4 className="card-title">{props.name}</h4>
       <p className="card-text">{props.description}</p>
       <button className="buttonEat" onClick={btnEat} >Eat</button>
       </div>
      </div>
  );
  }
  
}


export default   FCRecipe;