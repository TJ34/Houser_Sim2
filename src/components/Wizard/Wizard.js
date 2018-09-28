import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Wizard.css';
import axios from 'axios';

export default class Wizard extends Component {
    constructor(){
        super();

        this.state = {
            house_name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }

    nameChange = (val) => {
        this.setState({house_name: val})
    }
    addressChange = (val) => {
        this.setState({address: val})
    }
    cityChange = (val) => {
        this.setState({city: val})
    }
    stateChange = (val) => {
        this.setState({state: val})
    }
    zipChange = (val) => {
        this.setState({zip: val})
    }
    postHouse = (house_name, address, city, state, zip) => {
        axios.post('/api/house', {house_name, address, city, state, zip});
    }

    render(){
        const {house_name, address, city, state, zip} = this.state;
        return(
        <div className="centerDiv">
        <div className="wizard">
            <div className="wordsButton">
                <p>Add New Listing</p>
                <Link to="/"><button>Cancel</button></Link>
            </div>
            <div>
                <p>Property Name</p>
                <input onChange={(e) => this.nameChange(e.target.value)}/>
                <p>Address</p>
                <input onChange={(e) => this.addressChange(e.target.value)}/>
                <div>
                    <div>
                        <p>City</p>
                        <input onChange={(e) => this.cityChange(e.target.value)}/>
                    </div>
                    <div>
                        <p>State</p>
                        <input onChange={(e) => this.stateChange(e.target.value)}/>
                    </div>
                    <div>
                        <p>Zip</p>
                        <input onChange={(e) => this.zipChange(e.target.value)}/>
                    </div>
                </div>
                <Link to="/"><button onClick={() => this.postHouse(house_name, address, city, state, zip)}>Complete</button></Link>
            </div>
        </div> 
        </div>
        )}
}