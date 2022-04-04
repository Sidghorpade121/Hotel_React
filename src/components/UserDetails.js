import React, { Component } from 'react';
import { Form, InputGroup, Button, Row, Col, Container } from 'react-bootstrap';
import "./Form.css"

class UserDetails extends Component {

  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
    
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["Add"] = "";
        //input["email"] = "";
       // input["comment"] = "";
       input["Add1"] = "";
       input["stt"] = "";
       input["twn"] = "";
       input["cty"] = "";
       input["pn"] = "";
      // input["km"] = "";
        this.setState({input:input});
  
        alert('Demo Form is submited');
    }
  }
  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["Add"]) {
      isValid = false;
      errors["Add"] = "Please enter your Address.";
    }
    if (!input["Add1"]) {
      isValid = false;
      errors["Add1"] = "Please enter your Address1.";
    }
    if (!input["stt"]) {
      isValid = false;
      errors["stt"] = "Please enter your State.";
    }
    if (!input["twn"]) {
      isValid = false;
      errors["twn"] = "Please enter your Town.";
    }
    if (!input["cty"]) {
      isValid = false;
      errors["cty"] = "Please enter your City.";
    }
    if (!input["pn"]) {
      isValid = false;
      errors["pn"] = "Please enter your Pin.";
    }

    {/*if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["comment"]) {
      isValid = false;
      errors["comment"] = "Please enter your comment.";
    }*/}

    this.setState({
      errors: errors
    });

    return isValid;
}

    render() {
        return (<Container>
           
        <Form onSubmit={this.handleSubmit}>
  <Row>
  
  <Form.Floating className="mb-3">
    <Form.Control
    
      id="floatingAdd1Custom"
      type="Text"
      name="Add"
      value={this.state.input.Add}
      onChange={this.handleChange}
      placeholder="House/Flat No."
    />
    <label htmlFor="floatingInputCustom">Address 1</label>
    <div className="text-danger">{this.state.errors.Add}</div>
  </Form.Floating>
  
  <Form.Floating>
    <Form.Control
      id="floatingAdd2Custom"
      type="text"
      placeholder="Area,Location"
      name="Add1"
      value={this.state.input.Add1}
      onChange={this.handleChange}
    />
    <label htmlFor="floatingPasswordCustom">Address 2</label>
    <div className="text-danger">{this.state.errors.Add1}</div>
  </Form.Floating>

  </Row>
  <br/>
  <Row>
  <Col>
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingSttCustom"
      type="text"
      placeholder="State"
      name="stt"
      value={this.state.input.stt}
      onChange={this.handleChange}
    />
    <label htmlFor="floatingInputCustom">State</label>
    <div className="text-danger">{this.state.errors.stt}</div>
  </Form.Floating>
  </Col><Col>
  <Form.Floating>
    <Form.Control
      id="floatingTwnCustom"
      type="text"
      placeholder="Town"
      name="twn"
      value={this.state.input.twn}
      onChange={this.handleChange}
    />
    <label htmlFor="floatingPasswordCustom">Town</label>
    <div className="text-danger">{this.state.errors.twn}</div>
  </Form.Floating>
</Col>
  </Row>
  <Row>
  <Col>
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingctyCustom"
      type="text"
      placeholder="city"
      name="cty"
      value={this.state.input.cty}
      onChange={this.handleChange}
    />
    <label htmlFor="floatingInputCustom">City</label>
    <div className="text-danger">{this.state.errors.cty}</div>
  </Form.Floating>
  </Col><Col>
  <Form.Floating>
    <Form.Control
      id="floatingpinCustom"
      type="text"
      placeholder="pin"
      name="pn"
      value={this.state.input.pn}
      onChange={this.handleChange}
    />
    <label htmlFor="floatingPasswordCustom">Pin</label>
    <div className="text-danger">{this.state.errors.pn}</div>
  </Form.Floating>
</Col>
  </Row>
  <Row>
  
  <Form.Floating>
    <Form.Control
      id="floatingkmCustom"
      type="text"
      placeholder="km"
      name="km"
      value={this.state.input.km}
      onChange={this.handleChange}
    />
    <label htmlFor="floatingPasswordCustom">Within KM</label>
    <div className="text-danger">{this.state.errors.km}</div>
  </Form.Floating>

  </Row>
  <br/>
  <Row>
      <Col>
      <input type="submit" value="Submit" class="btn btn-success" />
  </Col>
  <Col>
  <input type="reset" value="Reset" class="btn btn-success" />
  </Col>
  </Row>
</Form>
        </Container>
        );
    }
}

export default UserDetails;