import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Wizard.css';

export default class Wizard extends Component {
    constructor(){
        super();

        this.state = {
            img: ''
        }
    }

    imgChange = (val) => {
        this.setState({img: val})
    }
    

    render(){
        return(
        <div className="centerDiv">
            <p>Image URL</p>
            <input onChange={(e) => this.imgChange(e.target.value)}/>
            <Link to='/wizard'><button>Previous Step</button></Link>
            <Link to='/wizard/Step3'><button>Next Step</button></Link>
        </div> 
        )
    }
}