import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';


const SmurfForm = ({ errors, touched, status }) => {
    const [smurfs, setSmurfs] = useState([]);
  
    useEffect(() => {
        if (status) {
            setSmurfs([...smurfs, status]);
          }
        }, [status, smurfs]);
  
    return (
        <div>
            <h3>Add a Smurf</h3>
            <Form>
                <Field type="text" name="name" placeholder="Name" />
                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}
        
                <Field type="number" name="age" placeholder="Age" />
                {touched.age && errors.age && <p className="error">{errors.age}</p>}

                <Field type="text" name="height" placeholder="Height" />
                {touched.height && errors.height && <p className="error">{errors.height}</p>}

                <button type="submit">Submit!</button>
            </Form>
        </div>

    );
  };
  
  const FormikUserForm = withFormik({
    mapPropsToValues({ name, age, height }) {
      return {
        name: name || '',
        age: age || '',
        height: height || '',
      };
    },
  
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Please enter name'),
      age: Yup.string().required('Please enter age'),
      height: Yup.string().required('Please enter height'),
    }),
  
    handleSubmit(values, { setStatus }) {
      axios
        .post('http://localhost:3333/smurfs', values)
        .then(res => {
          setStatus(values);
          console.log(res);
        })
        .catch(err => console.log(err.response));
    }
  })(SmurfForm);
  
  export default FormikUserForm;