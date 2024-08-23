import { useForm } from "react-hook-form";
import Field from "../common/Field";
import styled from "styled-components";

function NotifyForm() {
  // const { data, handleChange, errors, handleSubmit } = useForm({
  //   username: "",
  //   mobile: "",
  //   email: "",
  //   address: {
  //     province: "",
  //     city: "",
  //     suburb: "",
  //     postal: "",
  //   },
  // });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (formData) => {
    console.log("Submit Form Data = ", formData);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <div className="aximo-coming-newsletter">
          <Field error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </Field>
          <Field error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </Field>
          <button type="submit" id="aximo-notified-btn">
            Register
          </button>

          <p>
            We do not share your information with any third party & no spam*
          </p>
        </div>
      </div>
    </form>
  );
}

export default NotifyForm;
