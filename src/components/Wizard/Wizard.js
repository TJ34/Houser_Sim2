import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './Wizard.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default class Wizard extends Component {

    render(){
        return(
        <div className="centerDiv">
        <div className="wizard">
            <p>Add New Listing</p>
            <Link to="/"><button>Cancel</button></Link> 
            <Switch>
                <Route exact path='/wizard' component={Step1}/>
                <Route path= '/wizard/Step2' component={Step2}/>
                <Route path= '/wizard/Step3' component={Step3}/>
            </Switch>
        </div>
        </div> 
        )
    }
}