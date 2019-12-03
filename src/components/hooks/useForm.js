import { useState } from 'react';

const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);
  console.log('values', values)

  return [values, e => {
    const [ name, value ] = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }]
};

export default useForm;