import React from 'react';
import PropTypes from 'prop-types';
import '../css/header.css';
import ShowHide from './ShowHide';


function Header(props) {
  
  return (
    <div className="card-header">
      <h1 className="card-header-title header">{props.counter}</h1>
      <ShowHide doneFn={props.doneFn}/>
    </div>
  )
};

/* Es para definir a que equivale cada prop */
Header.propTypes = {
  counter: PropTypes.number
}

Header.defaultProps = {
  counter: 0
}

export default Header;
