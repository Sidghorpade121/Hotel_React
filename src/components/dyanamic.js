import React, { Component } from "react";
const animalsList = [
    {
        id: 1,
        value: 'Tiger'
    }, {
        id: 2,
        value: 'Lion'
    }, {
        id: 3,
        value: 'Dog'
    }, {
        id: 4,
        value: 'Cat'
    }
    ];
    
    // generage select dropdown option list dynamically
    function Options({ options }) {
        return (
            options.map(option => 
                        <option key={option.id} value={option.value}>                                   
                        {option.value}
                        </option>)
                       );
    }
    
    <select
    name="animal"
    className="form-control">
    <Options options={animalsList} />
    </select>

    export default Options;