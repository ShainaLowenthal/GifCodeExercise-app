//SearchField-has a state with search field input 

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import GifCard from './GifCard.js';
import '../App.css';

class SearchField extends Component{
    constructor(props){
    super(props);
    this.state =
    {
        url: '',
        //url: 'https:/api.giphy.com/v1/gifs/search?api_key=F2osj4YaZo0MWzD1cQgFhh87raC22C7D&q=',
        //=trending&limit=25&offset=0&rating=G&lang=en
        input:'',
        gif: []

    }
}

handleApiUrl = (event) =>
{
    if(event.target.value === 'trending')
    {
        this.setState({url: 'https:/api.giphy.com/v1/gifs/trending?api_key=F2osj4YaZo0MWzD1cQgFhh87raC22C7D', input: event.target.value})
    }
    if(event.target.value === 'random')
    {
        this.setState({url: 'https:/api.giphy.com/v1/gifs/random?api_key=F2osj4YaZo0MWzD1cQgFhh87raC22C7D', input: event.target.value})
    }
    else
    {
        this.setState({url: 'https:/api.giphy.com/v1/gifs/search?api_key=F2osj4YaZo0MWzD1cQgFhh87raC22C7D&q=', input: event.target.value})
    }
    
}
handleSubmit = () =>
{
    axios.get(this.state.url + this.state.input).then(response=>{
        this.setState({
            gif:response.data.data
            
        })
        //console.log(response.data)
    })
}
handleChange = (event) =>
{
this.setState({input: event.target.value});
}
    render(){
        console.log(this.state.gif)
        return<div className = "searchWrapper">
             <div className = "heading">This is my Giphy Search App</div>
             <input  className = "searchBar" type = "text" value={this.state.input} onChange ={this.handleApiUrl}/>
            <button className = "searchButton" onClick ={this.handleSubmit}>Submit</button>
                <div  className = "imagesWrapper">
                {
                    
                   
                    this.state.gif.map(obj =>{
                        console.log(obj.images);
                        return <GifCard data = {obj.images.downsized.url} key={obj.id}/>
                        
                    })
                }</div>
                
          
            
            </div>

    }
}


SearchField.protoType={
    input: PropTypes.string,
    url: PropTypes.string,
    gif:PropTypes.string, 
}

export default SearchField
