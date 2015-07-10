import React from 'react';
import _ from 'lodash';
import Icon from './Icon';
import classNames from 'classnames';


export default class PasswordValidator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      minCharacters: this.props.minCharacters,
      requireCapitals: this.props.requireCapitals,
      requireNumbers: this.props.requireNumbers,
      forbiddenWords: this.props.forbiddenWords,
      name: this.props.name
    };
  }

  render() {
    var validatorTitle;
    var validatorClass = classNames({
      'password_validator': true,
      'visible': this.props.visible,
      'invisible': !this.props.visible
    });

    var forbiddenWords = this.state.forbiddenWords.map((word,i) => {
      return ( 
        <span key = {i} className = "bad_word"> "{word}"</span>
      )
    })


    if(this.props.valid) {
      validatorTitle = `Valid ${this.props.name }`
    } else {
      validatorTitle = `${this.props.name} Rules!`; 
    }

    return (
      <div className={validatorClass}>
      <div className="validator_container">

     <span className="validator_title valid">{validatorTitle} </span>

      <ul className="rules_list">

      <li className={classNames({'valid': this.props.validData.minChars})}> 
      <i className="icon_valid"> <Icon type="circle_tick_filled"/ > < /i>
      <i className="icon_invalid"> <Icon type="circle_error"/ > < /i>
      <span className="error_message">{this.state.minCharacters} characters minimum</span > < /li>

      <li className={classNames({'valid': this.props.validData.capitalLetters})}> 
      <i className="icon_valid"> <Icon type="circle_tick_filled"/ > < /i>
      <i className="icon_invalid"> <Icon type="circle_error"/ > < /i>
      <span className="error_message">Contains at least {this.state.requireCapitals} capital letter</span > < /li>

      <li className={classNames({'valid': this.props.validData.numbers})}> 
      <i className="icon_valid"> <Icon type="circle_tick_filled"/ > < /i>
      <i className="icon_invalid"> <Icon type="circle_error"/ > < /i>
      <span className="error_message">Contains at least {this.state.requireNumbers} number</span > < /li>

      <li className={classNames({'valid': this.props.validData.words})}> 
      <i className="icon_valid"> <Icon type="circle_tick_filled"/ > < /i>
      <i className="icon_invalid"> <Icon type="circle_error"/ > < /i>
      <span className="error_message">Can't be {forbiddenWords}</span > < /li>

      </ul> 
      </div>
      </div>
    )
  }
}

