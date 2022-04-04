import React, { Component } from "react";
class DistDropdown1 extends React.Component
{
constructor(){
    super();
this.state={
    states:[],
    city :[],
    selectstate: '',
    Id:''
}
}

componentDidMount()
{

     fetch("http://localhost:8080/Cities")
     .then(response=>response.json())
     .then(states=>this.setState({states:states}));
     
}

changeState(e) {
    
    this.setState({ selectstate: e.target.value });
    console.log( e.target.value);

    fetch("http://localhost:8080/Hotels/" +e.target.value)
    .then(response=>response.json())
    .then(city=>this.setState({city:city}))
    console.log( this.state.city);
    //this.setState({ Id: this.state.states.find(res => res.state_Name === e.target.value ).state_ID})

    //this.setState({ city: this.state.city.find(res => res.state_ID === e.target.value.state_ID ).city })

}

render()
{
    return<div>
    
        
        <p1>Select State</p1>
        <select value={this.state.selectstate} onChange={this.changeState.bind(this)}>
            <option>-select State-</option>
            {
             this.state.states.map(states=><option value={states.id}>{states.name}</option>)
            }
        </select> 
           <br/>
           <p1>Select District</p1>
        <select onClick={this.data}>
            <option>-select district-</option>
            {
             this.state.city.map(city=><option value={city.hotel_Name}>{city.hotel_Name}</option>)
            }
        </select> 
    </div>
}
} export default DistDropdown1;