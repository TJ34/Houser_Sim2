import React from 'react';
import './House.css';

export default function House(props){
    return <div className="listing">
            <div className="propDelete">
                <div>Propery Name: {props.house_name}</div>
                <button onClick={() => props.deleteHouse(props.id)}>X</button>
            </div>
            <div className="addressItems">Address: {props.address}</div>
            <div className="addressItems">City: {props.city}</div>
            <div className="addressItems">State: {props.property_state}</div>
            <div className="addressItems">Zip: {props.zip}</div>
           </div>
}