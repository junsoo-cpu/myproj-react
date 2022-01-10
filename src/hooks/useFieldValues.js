import { useState } from 'react';

function useFiledValues(initialValues) {
  const [fieldValues, setFieldValues] = useState(initialValues);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFieldValues((prevFieldValues) => {
      return {
        ...prevFieldValues,
        [name]: value, //. 배열이 아닌 계산된 name이라는 의미
      };
    });
  };

  const clearFieldValues = () => {
    setFieldValues(initialValues);
  };
  return {
    fieldValues,
    handleFieldChange,
    clearFieldValues,
    setFieldValues,
  };
}

export default useFiledValues;
