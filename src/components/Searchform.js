import React, { Component } from "react";

class Searchform extends React.Component {

    constructor() {
        super();
        this.state = {

            states: [],
            cities: [],
            selectstate: ''
        };
    }
    componentDidMount() {
        this.setState({
            states: [
                { Id: 1, name: "MAHARASHTRA", cities: ["Nashik", "Nagpur"] },
                { Id: 2, name: "MP", cities: ["one", "two"] },
                { Id: 3, name: "HP", cities: ["three", 'four'] },
                { Id: 4, name: "AP", cities: ["five", "six"] },
            ]

        })
    }
    changeState(e) {
        this.setState({ selectstate: e.target.value });
        this.setState({ cities: this.state.states.find(res => res.name === e.target.value).cities })

    }
     handleSubmit = (event) => {
        event.preventDefault();
       
      }
    render() {
        return (
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label><b>STATE</b></label>
                <select value={this.state.selectstate} onChange={this.changeState.bind(this)} required>
                    <option>Select State</option>
                    {this.state.states.map((res) => {
                        return <option>{res.name}</option>
                    })}
                </select>
                <div>
                    <label><b>CITIES</b></label>
                    <select>
                        <option>
                            Select Cities
                        </option>
                        {this.state.cities.map((res) => {
                            return <option>{res}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label><b>Check In Date</b></label><br />
                    <input type="date"></input>
                </div>
                <div>
                    <label><b>Check Out Date</b></label><br />
                    <input type="date"></input>
                </div>
            </div>
            <br />
            <input type="submit" />
            </form>
        )
    }
}
export default Searchform;