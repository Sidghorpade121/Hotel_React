import React from 'react';
import { useFormik } from 'formik';
//import { Yupemployee } from './Yupemployee';
//import { Yupformikempcomp } from './Yupformikempcomp';
import "./Form.css"
import { Form, InputGroup, Button, Row, Col, Container } from 'react-bootstrap';
class Form1 extends React.Component {

  render() {
    return (
      <div>
        { /* <Yupformikempcomp/>
          */}
        { /*<Yupemployee />*/}
        <hr />
        <Employee />

      </div>
    );
  }
}
const validateEmployee = empData => {
  const errors = {};
  if (!empData.code) {
    errors.code = 'Please Enter Employee code';
  } else if (empData.code.length < 2) {
    errors.code = 'code is  3 digit';
  }
  if (!empData.name) {
    errors.name = 'Please Enter Employee Name';
  } else if (empData.name.length > 20) {
    errors.name = 'Name cannot exceed 20 characters';
  }

  if (!empData.annualSalary) {
    errors.annualSalary = 'Please Enter Employee salary';
  }
  if (!empData.gender) {
    errors.gender = 'Please Enter Employee gender';
  }
  if (!empData.EmailId) {
    errors.EmailId = 'Please Enter Email ID';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)) {
    errors.EmailId = 'Invalid email address';
  }
  if (!empData.dateOfBirth) {
    errors.dateOfBirth = 'Please Enter DOB';
  }

  return errors;
};
function Employee() {
  const formik = useFormik({
    initialValues: {
      code: '',
      name: '',
      gender: '',
      annualSalary: '',
      dateOfBirth: '',
      EmailId: ''
    },
    validate: validateEmployee,
    onSubmit: values => {

      alert(JSON.stringify(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
<Row>
    
      <div class="box">
        <label for="code">Addres 1 <input type="text" name="code"
          value={formik.values.code}
          onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
          {formik.touched.code && formik.errors.code ?
            <span style={{ color: 'red' }}>{formik.errors.code}</span> : null}</label>
            </div>
     
     
      
        <label>Address 2 <input type="text" name="name"
          value={formik.values.name}
          onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
          {formik.touched.name && formik.errors.name ? <span style={{ color: 'red' }}>{formik.errors.name}</span> : null}</label>
     
      
      </Row>
      <p>
        <label>Employee gender : <input type="text" name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
          {formik.touched.gender && formik.errors.gender ? <span style={{ color: 'red' }}>{formik.errors.gender}</span> : null}</label>
      </p>
      <p>
        <label>Employee annualSalary : <input type="text" name="annualSalary"
          value={formik.values.annualSalary}
          onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
          {formik.touched.annualSalary && formik.errors.annualSalary ? <span style={{ color: 'red' }}>{formik.errors.annualSalary}</span> : null}</label>
      </p>
      <p>
        <label>Employee dateOfBirth : <input type="text" name="dateOfBirth"
          value={formik.values.dateOfBirth}
          onChange={formik.handleChange} onBlur={formik.dateOfBirth}></input>
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? <span style={{ color: 'red' }}>{formik.errors.dateOfBirth}</span> : null}</label>
      </p>
      <p>
        <label>Employee EmailId : <input type="text" name="EmailId"
          value={formik.values.EmailId}
          onChange={formik.handleChange} onBlur={formik.EmailId}></input>
          {formik.touched.EmailId && formik.errors.EmailId ? <span style={{ color: 'red' }}>{formik.errors.EmailId}</span> : null}</label>
      </p>
      <button type="submit">Create</button>
    </form>
  )
}
export default Form1;