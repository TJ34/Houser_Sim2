import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Wizard.css';
import axios from 'axios';

export default class Wizard extends Component {
    constructor(){
        super();

        this.state = {
            mortgage: 0,
            rent: 0
        }
    }

    mtgChange = (val) => {
        this.setState({mortgage: val})
    }
    rentChange = (val) => {
        this.setState({rent: val})
    }
   
    postHouse = (house_name, address, city, state, zip) => {
        axios.post('/api/house', {house_name, address, city, state, zip});
    }

    render(){
        const {house_name, address, city, state, zip} = this.state;
        return(
        <div>
            <p>Recommended Rent: {this.state.rent*1.25}</p>
            <div>
                <p>Monthly Mortgage Amount</p>
                <input onChange={(e) => this.mtgChange(e.target.value)}/>
                <p>Desired Monthly Rent</p>
                <input onChange={(e) => this.rentChange(e.target.value)}/>
            </div>
            <div>
                <Link to='/wizard/Step2'><button>Previous Step</button></Link>
                <Link to="/"><button onClick={() => this.postHouse(house_name, address, city, state, zip)}>Complete</button></Link>
            </div>
        </div> 
        )
    }
}