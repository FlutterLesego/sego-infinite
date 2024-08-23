import { useState } from "react";

// Utilities
import { validateForm } from "@/utilities/validateForm";

export const useForm = (formData) => {
  const [data, setData] = useState(formData);
  const [errors, setErrors] = useState({});

  const handleChange = (event, parent) => {
    const { id, name, value, textContent } = event.target;

    const key = id || name;
    const val = textContent || value;

    if (parent) {
      setData({ ...data, [parent]: { ...data[parent], [key]: val } });
    } else {
      setData({ ...data, [key]: val });
    }
  };

  const isEmpty = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        if (!isEmpty(obj[key])) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (event, callback) => {
    event.preventDefault();
    const validationErrors = validateForm(data);
    setErrors(validationErrors);

    if (isEmpty(validationErrors)) {
      // Handle form submission
      return await callback(data);
    } else {
      let errorCount = 0;
      for (let key in validationErrors) {
        if (
          typeof validationErrors[key] === "object" &&
          validationErrors[key] !== null
        ) {
          errorCount += Object.keys(validationErrors[key]).length;
        } else {
          errorCount++;
        }
      }
      console.log(`Form has ${errorCount} errors!`);
    }
  };

  return { data, handleChange, handleSubmit, errors };
};
