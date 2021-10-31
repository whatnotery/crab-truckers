import React, { Component } from 'react'
import Dice from './Dice';
import './CrabGoddess.css'
import './Dice.css'
import img from './img/crabGoddess.png'

class CrabGoddess extends Component {

  render() {

    return(
    <div className="CrabGoddess">
    <h3>Crab Goddess</h3>
      <img className="CrabGoddess-avatar" src={img} alt="Crab Goddess icon"/>
 
      <Dice/>
      
    </div>
    )
  };
};

export default CrabGoddess;