//GifCard Component: presentational component receiving GIF info as props

import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import './App.css';
import axios from 'axios';

class GifCard extends Component//make function
{
    // constructor(props){
    //     super(props);
   // }
    render(){
        console.log(this.props.data)
        return(
            <div>
                <p>
                    <img src={this.props.data}></img>
                    
                </p>
            </div>
        )
    }
}
// GifCard.propType ={
//     gif: PropTypes.string
// }

export default GifCard