import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Wizard.css';
import {connect} from 'react-redux';
import {updateHouseName, updateAddress, updateCity, updateState, updateZip} from '../../ducks/reducer';

class Step1 extends Component {
    render(){
        console.log(this.props);
        return(
        <div>
            <div>
                <p>Property Name</p>
                <input onChange={(e) => this.props.updateHouseName(e.target.value)}/>
                <p>Address</p>
                <input onChange={(e) => this.props.updateAddress(e.target.value)}/>
                <div>
                    <div>
                        <p>City</p>
                        <input onChange={(e) => this.props.updateCity(e.target.value)}/>
                    </div>
                    <div>
                        <p>State</p>
                        <input onChange={(e) => this.props.updateState(e.target.value)}/>
                    </div>
                    <div>
                        <p>Zip</p>
                        <input onChange={(e) => this.props.updateZip(e.target.value)}/>
                    </div>
                </div>
                <Link to='/wizard/Step2'><button>Next Step</button></Link>
            </div>
        </div> 
        )
    }
}

function mapStateToProps(state){
    const{house_name, address, city, property_state, zip} = state;

    return {
        house_name,
        address,
        city,
        property_state,
        zip
    }
}

export default connect(mapStateToProps,{updateHouseName,updateAddress,updateCity,updateState, updateZip})(Step1);