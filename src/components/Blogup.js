import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export function Blogup(props) {

    const [employee, setEmployee] = useState({});
    const { code } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:63799/api/Employees/" + code)
            .then(res => res.json())
            .then((result) => {
                setEmployee(result);
            }

            );
    }, {});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEmployee(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        let demo = JSON.stringify(employee);
        console.log(JSON.parse(demo));
        fetch("http://localhost:63799/api/Employees/" + code, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r.json()) })
        navigate('/');
        event.preventDefault();
        alert(employee);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>code:</label>
            <input
                type="text"
                name="code"
                value={employee.code || ""}
                onChange={handleChange}
            />
            <br />
            <label>name:</label>
            <input
                type="text"
                name="name"
                value={employee.name || ""}
                onChange={handleChange}
            />
            <br />
            <label>gender:</label>
            <input
                type="text"
                name="gender"
                value={employee.gender || ""}
                onChange={handleChange}
            />
            <br />
            <label>salary:</label>
            <input
                type="text"
                name="annualSalary"
                value={employee.annualSalary || ""}
                onChange={handleChange}
            />
            {employee.annualSalary}<br />
            <label>DOB:</label>
            <input
                type="text"
                name="dateOfBirth"
                value={employee.dateOfBirth || ""}
                onChange={handleChange}
            />
            <input type="submit" />

        </form>
    );
}
export default Blogup;