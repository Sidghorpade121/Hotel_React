import React, { Component } from "react";


  class DropDown extends React.Component{

state={

    users:[]
}

componentDidMount()
{
     fetch('http://localhost:8080/RestPro/crud/states')
     .then(response=>response.json())
     .then(users=>this.setState({users:users}))
}

render()
{
    return<div>
      <p1> Select State:</p1>
        <select>
        <option>-select state-</option>
            {
               
                this.state.users.map(users=><option value="users.value">{users.state_Name}</option>)
               
            }
        </select><br></br>
    
        <p1>Select District</p1>
        <select onClick={this.data}>
            <option>-select district-</option>
            {
             this.state.user.map(user=><option value="user.value">{user.district_name}</option>)
            }
        </select> 
    </div>
    }
    }
    export  default DropDown;