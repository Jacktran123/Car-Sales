import React from 'react';
import {removeFeature} from '../action/action';
import {connect} from 'react-redux';

const AddedFeature = props => {

   const removeClick = () =>{
      props.removeFeature(props.feature)
   };
 

  return (
    <li>  
    <button className="button" style={{display: 'inline-block'}} onClick={removeClick}>X</button> 
      <p style={{display: 'inline-block'}}>{props.feature.name} </p>
    </li>
  );
};


export default connect(null,{removeFeature})(AddedFeature);