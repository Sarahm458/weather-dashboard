import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CitySchema = Yup.object().shape({
  city: Yup.string().required('City name is required'),
});

class CityInputForm extends Component {
  handleSubmit = (values, { setSubmitting }) => {
    this.props.fetchWeatherData(values.city);
    setSubmitting(false);
  };

  render() {
    return (
      <Formik
        initialValues={{ city: '' }}
        validationSchema={CitySchema}
        onSubmit={this.handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col items-center">
            <Field
              type="text"
              name="city"
              placeholder="Enter city name"
              className="p-2 border rounded"
            />
            <ErrorMessage name="city" component="div" className="text-red-500" />
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
              Get Weather
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default CityInputForm;

