import React from 'react';
import {connect } from 'react-redux';
import {addFeature} from '../action/action.js';

const AdditionalFeature = props => {

  const handleClick = () => {
    props.addFeature(props.additionalFeatures)
  }

  return (
    <li>
      <button className="button" onClick={handleClick}>Add</button>
      {props.additionalFeatures.name} for ${props.additionalFeatures.price}
    </li>
  );
};




export default connect(null,{addFeature})(AdditionalFeature);
