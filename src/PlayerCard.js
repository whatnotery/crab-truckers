import React, { useState, useEffect } from 'react'
import Dice from './Dice';
import './PlayerCard.css'
import './Dice.css'

export default function PlayerCard(props) {
    
       const [bonusRoll, setBonusRoll] = useState(0)
       const [penaltyRoll, setPenaltyRoll] = useState(0)
     

    return(
    <div className="PlayerCard">
      <img className="PlayerCard-avatar" src="https://ih1.redbubble.net/image.530232687.3181/st,small,507x507-pad,600x600,f8f8f8.u4.jpg" alt="player icon"/>
      <div className="PlayerCard-skills">
        
      <input className="input1" type="checkbox" id="Skill1" name="Skill1" value="1"   />
        <button className="button1">
            <label for="Skill1">Truckin'</label>
        </button>

        <input className="input2" type="checkbox" id="Skill2" name="Skill2" value="1" />
        <button className="button2">
            <label for="Skill2">Wrenchin'</label>
        </button>

        <input className="input3" type="checkbox" id="Skill3" name="Skill3" value="1"/>
        <button className="button3">
            <label for="Skill3">Drinkin'</label>
        </button>

        <input className="input4" type="checkbox" id="Skill4" name="Skill4" value="1"/>
        <button className="button4">
            <label for="Skill4">Hollerin'</label>
        </button>
        </div>
      <Dice bonus={bonusRoll} penalty={penaltyRoll} />
      
    </div>
    );
};

