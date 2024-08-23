export const validateForm = (data) => {
  const errors = {};
  const skipped = ["vatRegistered"];

  const validateField = (key, value) => {
    let error = "";
    if (!value || value.length === 0) {
      const fieldName = key.charAt(0).toUpperCase() + key.slice(1);
      error = `${fieldName.replace(/([A-Z])/g, " $1")} is required!`;
    } else if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Email is invalid!";
    } else if (key === "password") {
      if (value.length < 12) {
        error = "Password must be at least 12 characters!";
      } else if (!/\d/.test(value)) {
        error = "Password must contain at least one number!";
      } else if (!/[A-Z]/.test(value)) {
        error = "Password must contain at least one uppercase letter!";
      } else if (!/[a-z]/.test(value)) {
        error = "Password must contain at least one lowercase letter!";
      } else if (!/[!@#$%^&*]/.test(value)) {
        error = "Password must contain at least one special character!";
      }
    } else if (key === "phone" && !/^[0-9]{10}$/.test(value)) {
      error = "Phone number should only contain 10 digits!";
    }
    return error;
  };

  for (const key in data) {
    if (skipped.includes(key)) {
      continue;
    }

    if (
      key === "vatNumber" &&
      (data.vatRegistered === "" || data.vatRegistered.toLowerCase() === "no")
    ) {
      continue;
    }

    if (typeof data[key] === "object" && data[key] !== null) {
      errors[key] = {};
      for (const nestedKey in data[key]) {
        if (skipped.includes(nestedKey)) {
          continue;
        }

        if (
          nestedKey === "vatNumber" &&
          (data[key].vatRegistered === "" ||
            data[key].vatRegistered.toLowerCase() === "no")
        ) {
          continue;
        }

        const error = validateField(nestedKey, data[key][nestedKey]);
        if (error) {
          errors[key][nestedKey] = error;
        }
      }
    } else {
      const error = validateField(key, data[key]);
      if (error) {
        errors[key] = error;
      }
    }
  }

  return errors;
};
