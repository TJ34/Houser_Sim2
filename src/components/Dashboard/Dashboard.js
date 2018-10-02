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
        console.log('mounted')
        axios.get('/api/houses').then((response) => {
            this.setState({house_list: response.data})
        })
    }

    // componentDidUpdate(){
    //     axios.get('/api/houses').then((response) => {
    //         console.log(response);
    //         if(this.state.house_list !== response.data){
    //         this.setState({house_list: response.data})
    //         }
    //     })
    // }

    deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`).then((response) =>{
            this.setState({house_list: response.data})
        })
    }

    render(){
        let houseList = this.state.house_list.map((house,i) => {
            console.log(this.house)
            return(
                <div key={i} className="mapListings">
                    <House 
                        house_name={house.house_name}
                        address={house.address}
                        city={house.city}
                        property_state={house.property_state}
                        zip={house.zip}
                        id={house.id}
                        deleteHouse={this.deleteHouse}
                        img={house.img}
                        mortgage={house.mortgage}
                        rent={house.rent}    
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