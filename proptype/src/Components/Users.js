import React from 'react';
import PropTypes from "prop-type";



function Users (props){
    return(
        <div>
            <h2> {props.name} </h2>
            <p>{props.productionyear}</p>
        </div>
    );
}
Users.propTypes ={
    name:PropTypes.string,
    productionyear:PropTypes.number,

};

export default Users