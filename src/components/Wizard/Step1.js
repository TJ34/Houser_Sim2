import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Wizard.css';
import {connect} from 'react-redux';
import {updateHouseName, updateAddress, updateCity, updateState, updateZip} from '../../ducks/reducer';

class Step1 extends Component {
    render(){
        console.log(this.props);
        return(
        <div className="allInputs">
                <div className="propertyInput">
                    <p className="titles">Property Name</p>
                    <input onChange={(e) => this.props.updateHouseName(e.target.value)} value={this.props.house_name} className="input1"/>
                </div>
                <div className="propertyInput">
                    <p className="titles">Address</p>
                    <input onChange={(e) => this.props.updateAddress(e.target.value)} value={this.props.address} className="input2"/>
                </div>
                <div className="cityStateZip">
                  <div className="csz">
                    <p className="titles">City</p>
                    <input onChange={(e) => this.props.updateCity(e.target.value)} value = {this.props.city} className="inputCSZ"/>
                  </div>
                  <div className="csz">  
                    <p className="titles">State</p>
                    <input onChange={(e) => this.props.updateState(e.target.value)} value={this.props.property_state} className="inputCSZ"/>
                  </div>
                  <div className="csz">
                    <p className="titles">Zip</p>
                    <input onChange={(e) => this.props.updateZip(e.target.value)} value={this.props.zip} className="inputCSZ"/>
                  </div>  
                </div>
                <div className="next1">
                    <Link to='/wizard/Step2'><button className="nextButton">Next Step</button></Link>
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