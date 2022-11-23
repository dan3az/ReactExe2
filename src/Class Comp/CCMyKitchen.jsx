import React, { Component } from 'react'
import FCRecipesDone from '../Functional Comp/FCRecipesDone';
import FCRecipesList from '../Functional Comp/FCRecipesList';
import EHeader from '../Elements/EHeader';

const InitResipeList=[
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOp1HKZ-ywEKECqHTQ9iALXtHuZljCUpX05DV4Uo8yb1YI4N4vidsqRrZnjS7gpcY9fk&usqp=CAU',name:'PIZZA',description:'the best pizza in all town',ready:false},
    {img:'https://www.cheftariq.com/wp-content/uploads/2021/05/falafel-7-500x500.jpg',name:'FALAFEL',description:'the best falafel in all town',toeat:false,ready:false},
    {img:'https://www.recipetineats.com/wp-content/uploads/2020/01/Chicken-Pad-Thai_9-SQ.jpg',name:'PAD THAI',description:'the best pad thai in all town',toeat:true,ready:false}
]


export default class CCMyKitchen extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          myKitchen: InitResipeList,
          counter: InitResipeList.length,
          recipesDone: [],
          counterDone: 0,
        };
    }
    
    deleteRecipe=(name,img,description)=>{
      let newDoneCounter = this.state.counterDone + 1;
      let newDoneRecipe = [...this.state.recipesDone, {img:img,name:name,description:description,ready:true }];
      this.setState({ recipesDone: newDoneRecipe, counterDone: newDoneCounter });



      let newCounter = this.state.counter - 1;
      let newMyKitchen = this.state.myKitchen.filter( recipe => recipe.name !== name);
      this.setState({ myKitchen: newMyKitchen,counter: newCounter});
    }


    eatRecipe=(name,img,description)=>{
      let newCounter = this.state.counter + 1;
      let newMyKitchen = [...this.state.myKitchen, {img:img,name:name,description:description,ready:false }];
      this.setState({ myKitchen: newMyKitchen, counter: newCounter });



      let  newDoneCounter= this.state.counterDone -1 ;
      let newDoneRecipe = this.state.recipesDone.filter( recipe => recipe.name !== name);
      this.setState({ recipesDone: newDoneRecipe,counterDone: newDoneCounter});
    }


  render() {
    return (
        <div>
        
        <h2>My recipes:  {this.state.counter}</h2><br />
        <FCRecipesList myKitchen={this.state.myKitchen} sendname2DeleteFromRecipe={this.deleteRecipe}/>
         <h2>Ready to eat: {this.state.counterDone}</h2><br />
        <FCRecipesDone recipesDone={this.state.recipesDone} sendname2EatFromRecipe={this.eatRecipe}/>
        </div>
    )
  }
}
