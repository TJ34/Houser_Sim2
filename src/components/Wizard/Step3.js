import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Wizard.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateMortgage, updateRent} from '../../ducks/reducer';

class Step3 extends Component {
   
    postHouse = (house_name, address, city, property_state, zip, img, mortgage, rent) => {
        axios.post('/api/house', {house_name, address, city, property_state, zip, img, mortgage, rent}).then(axios.get('/api/houses')
        );
    }

    render(){
        const {house_name, address, city, property_state, zip,img, mortgage, rent} = this.props;
        return(
        <div>
            <p className="titles">Recommended Rent: ${this.props.mortgage*1.25}</p>
            <div className="mortRent">
                <p className="titles">Monthly Mortgage Amount</p>
                <input onChange={(e) => this.props.updateMortgage(e.target.value)} className="input3"/>
            </div>
            <div className="mortRent">
                <p className="titles">Desired Monthly Rent</p>
                <input onChange={(e) => this.props.updateRent(e.target.value)} className="input3"/>
            </div>
            <div className="prevComplete">
                <Link to='/wizard/Step2'><button className="previous">Previous Step</button></Link>
                <Link to="/"><button onClick={() => this.postHouse(house_name, address, city, property_state, zip, img, mortgage, rent)} className="complete">Complete</button></Link>
            </div>
        </div> 
        )
    }
}
function mapStateToProps(state){
    const{mortgage, rent} = state;

    return {
        mortgage,
        rent,
        house_name: state.house_name,
        address: state.address,
        city: state.city,
        property_state: state.property_state,
        zip: state.zip,
        img: state.img,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

export default connect(mapStateToProps,{updateMortgage, updateRent})(Step3);