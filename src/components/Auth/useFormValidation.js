import React from "react";

function useFormValidation(initialState) {
  const [values, setValues] = React.useState(initialState);

  function handleChange(event) {
    event.persist();
    setValues(prevValues => ({
      ...prevValues,
      [event.target.name]: event.target.value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({values});
  }

  return {handleChange, handleSubmit, values}
}

export default useFormValidation;
