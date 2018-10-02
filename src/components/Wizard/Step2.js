import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Wizard.css';
import {connect} from 'react-redux';
import {updateImg} from '../../ducks/reducer';

class Step2 extends Component {
    

    render(){
        return(
        <div className="imgPage">
            <div className="imgInput">
                <p className="titles">Image URL</p>
                <input onChange={(e) => this.props.updateImg(e.target.value)} className="input3"/>
            </div>
            <div className="step2Links">
                <Link to='/wizard'><button className="previous">Previous Step</button></Link>
                <Link to='/wizard/Step3'><button className="buttons">Next Step</button></Link>
            </div>
        </div> 
        )
    }
}
    function mapStateToProps(state){
        const{img} = state;
    
        return {
            img
        }
    }

export default connect(mapStateToProps,{updateImg})(Step2);