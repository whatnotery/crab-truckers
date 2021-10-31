import React, { Component } from "react";
import "./Dice.css";
import img from "./img/D8.png";

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bonusRoll: this.props.bonus,
      penaltyRoll: this.props.penalty,
      totalRoll: 0,
    };
    this.rollDie = this.rollDie.bind(this);
    this.twoHighest = this.twoHighest.bind(this);
  }

  twoHighest(arr) {
    let highest = 0;
    let secondHighest = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > highest) {
        highest = arr[i];
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > secondHighest && arr[i] < highest) {
        secondHighest = arr[i];
      }
    }
    return [secondHighest, highest];
  }

  rollDie(bonus, penalty) {
    let rolls = [];
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;

    if (!bonus && !penalty) {
      for (let i = 0; i < 2; i++) {
        rolls.push(Math.ceil(Math.random() * 8));
      }
      return this.setState({ totalRoll: rolls.reduce(reducer) });
    } else if (bonus && !penalty) {
      for (let i = 0; i < 2 + bonus; i++) {
        rolls.push(Math.ceil(Math.random() * 8));
      }
      return this.setState({
        totalRoll: this.twoHighest(rolls).reduce(reducer),
      });
    } else if (!bonus && penalty) {
      for (let i = 0; i < 2 + penalty; i++) {
        rolls.push(Math.ceil(Math.random() * 8));

      }
      return this.setState({
        totalRoll: rolls
          .sort((a, b) => a - b)
          .slice(0, 2)
          .reduce(reducer),
      });
    } else if (bonus && penalty) {
      if (bonus === penalty) {
        return this.rollDie();
      } else if (bonus > penalty) {
        bonus = bonus - penalty;
        return this.rollDie(bonus);
      } else if (bonus < penalty) {
        penalty = penalty - bonus;
        return this.rollDie(0, penalty);
      }
    }
  }

  render() {
    let penaltyDisplay;
    if (this.props.penalty) {
      penaltyDisplay = <p>Penalty: {this.props.penalty}</p>;
    } else {
      penaltyDisplay = null;
    }

    let bonusDisplay;
    if (this.props.bonus) {
      bonusDisplay = <p>Bonus: {this.props.bonus}</p>;
    } else {
      bonusDisplay = null;
    }

    return (
      <div className="Dice">
        <div className="Dice-wrap">
          <div className="Dice-base-roll">
            <h3>{this.state.totalRoll}</h3>
          </div>
          <div className="Dice-modifiers-wrap">
            {bonusDisplay}
            &nbsp;&nbsp;
            {penaltyDisplay}
          </div>
          <button
            className="Dice-btn"
            onClick={() =>
              this.rollDie(
                parseInt(this.props.bonus),
                parseInt(this.props.penalty)
              )
            }
          >
            <img className="Dice-img" src={img} alt="Dice icon" />
          </button>
        </div>
      </div>
    );
  }
}

export default Dice;
