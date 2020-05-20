import { useState } from "react";

export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const changeHandler = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const updateInitialValues = (state) => {
    setValues(state);
  };

  return [values, changeHandler, updateInitialValues];
};
