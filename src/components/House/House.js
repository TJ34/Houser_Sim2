import React from 'react';
import './House.css';

export default function House(props){
    return <div className="listing">
            <img src={props.img} className="image"/>
            
            <div>
                <div className="addressItems">Propery Name: {props.house_name}</div>
                <div className="addressItems">Address: {props.address}</div>
                <div className="addressItems">City: {props.city}</div>
                <div className="addressItems">State: {props.property_state}</div>
                <div className="addressItems">Zip: {props.zip}</div>
            </div>
            <div className="mortgageRent">
                <div>Monthly Mortgage: {props.mortgage}</div>
                <div>Desired Rent: {props.rent}</div>
            </div>
            <div className="propDelete">
                <button onClick={() => props.deleteHouse(props.id)} className="deleteButton">X</button>
            </div>
           </div>
}