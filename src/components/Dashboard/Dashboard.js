import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

export default class Wizard extends Component {
    constructor(){
        super();

        this.state = {
            house_list: []
        }
    }

    componentDidMount(){
        axios.get('/api/houses').then((response) => {
            this.setState({house_list: response.data})
        })
    }

    deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`).then((response) =>{
            this.setState({house_list: response.data})
        })
    }

    render(){
        console.log(this.state);
        let houseList = this.state.house_list.map((house,i) => {
            return(
                <div key={i} className="mapListings">
                    <House 
                        house_name={house.house_name}
                        address={house.address}
                        city={house.city}
                        state={house.property_state}
                        zip={house.zip}
                        id={house.id}
                        deleteHouse={this.deleteHouse}    
                    />
                </div>
        )})

        return(
        <div className="dashboard">
        <div className="centerDash">
            <div className="wordLink">
                <p>Dashboard</p>
                <Link to="/wizard"><button className="newButton">Add New Property</button></Link>
            </div>
            <div className="allListings">
                <p className="homeListings">Home Listings</p>
                {houseList}
            </div>
        </div>
        </div> 
        )}
}