import React from 'react';
import {connect} from 'react-redux';

const Header = props => {
  return (
    <>
       <figure className="image is-128x128">
        <img src={props.img} alt={props.alt} />
      </figure>
       <h2>{props.alt}</h2>
      <p>Amount: ${props.price}</p>  
    </>
  );
};

const mapStateToProps = state =>{
  return{
    img: state.car.image,
    alt: state.car.name,
    price: state.car.price

  }
}
  

export default connect(mapStateToProps,{})(Header);
 