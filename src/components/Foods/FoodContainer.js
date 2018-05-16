import React, {Component} from 'react';
import {FoodList} from './FoodList';

class FoodContainer extends Component{
 
  state = {
    foodsSearch: this.props.foods
  }
 
  searchFood = (e) => {
    const foodsSearch =  this.props.foods.filter(food => food.name.toLowerCase().includes(e.target.value));
    this.setState({foodsSearch});
    console.log(e.target.value)
  }

  addFood = (e) => {
    const newFood = e.target.value;
    this.props.foods.push[newFood]
    console.log(newFood)
  }

 render(){
   return(
     <div >
        <br/>
       <br/>
       <input onChange={this.searchFood} name="inputSearch" type="text" placeholder="Busca tu comida aqui"/>
       <br/>
       <br/>
       <input onChange={this.addFood} type="text"/>
       <input onChange={this.addFood} type="number"/>
       
       <input  type="submit"/>
       {this.state.foodsSearch.map((food,index)=>{
         return <FoodList key={index} food={food}/>
       })}
       
     </div>
   )
 }
}

export default FoodContainer;