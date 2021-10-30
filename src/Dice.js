import React, { Component } from "react";
import "./Dice.css";
import img from "./img/D8.png";

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bonusRoll: 0,
      penaltyRoll: 0,
      totalRoll: 0
    };
    this.rollBaseDie = this.rollBaseDie.bind(this);
  }


 twoHighest(arr) {
    let highest = 0;
    let secondHighest = 0;
  
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > highest) {
        highest = arr[i];
      }
    }
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > secondHighest && arr[i] < highest) {
        secondHighest = arr[i];
      }
    }
    return [secondHighest, highest];
  }
  
  
  
   rollDie(bonus,penalty) {
    let rolls = []
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    if (!bonus && !penalty){
      
      for (let i = 0; i < 2; i++) { 
        rolls.push(Math.ceil(Math.random() * 8)) * i; 
      }; this.setState({totalRoll: rolls.reduce(reducer)});
    } else if (bonus && !penalty) {
       
      for (let i = 0; i < (2 + bonus); i++) {
         rolls.push(Math.ceil(Math.random() * 8)) * i;
       } console.log(rolls) 
      return this.twoHighest(rolls).reduce(reducer); 
      
    } else if (!bonus && penalty) {
      
      for (let i = 0; i < (2 + penalty); i++) {
         rolls.push(Math.ceil(Math.random() * 8)) * i;
       } console.log(rolls) 
      return res = rolls.sort((a,b) => a - b).slice(0, 2).reduce(reducer);
    
    } else if (bonus && penalty) {
      
      if (bonus === penalty) {
        return this.rollDie()  
      
      } else if (bonus > penalty) {
        bonus = bonus - penalty;
        return this.rollDie(bonus)
      
      } else if (bonus < penalty) {
        penalty = penalty - bonus
        return this.rollDie(0, penalty)
      }   
    }
  };




  rollBaseDie() {
    let baseResult = (Math.ceil(Math.random() * 8)) + (Math.ceil(Math.random() * 8));
     this.setState({baseRoll:baseResult});
  }



  render() {
    return (
      <div className="Dice">
        <div className="Dice-rolls-wrap">
          <div className="Dice-base-roll">
          <h5>Baseroll:&nbsp;{this.state.totalRoll}</h5>
          </div>
        </div>
          <button className="Dice-btn" onClick={this.rollDie}>
          <img className="Dice-img" src={img} alt="Dice icon" />
        </button>
      </div>
    );
  }
}

export default Dice;
