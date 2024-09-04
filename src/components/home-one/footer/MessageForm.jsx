import emailjs from "emailjs-com";
import ArrowRight3Img from "../../../assets/images/icon/arrow-right3.svg";
import { set, useForm } from "react-hook-form";
import Field from "../../common/Field";
import { useRef, useState } from "react";
import Preloader from "../../common/Preloader";

function MessageForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const sendEmail = async (formData) => {
    try {
      setLoading(true);
      setStatusMessage("");
      setStatusType("");

      await emailjs.sendForm(
        "service_ukys71c", // Replace with your service ID
        "template_o6tz79u", // Replace with your template ID
        form.current,
        "O1vsDqME7M2Cbi8cj" // Replace with your public key (user ID)
      );

      setStatusMessage("Message sent successfully!");
      setStatusType("success");
    } catch (error) {
      setStatusMessage("Failed to send message. Please try again.");
      setStatusType("error");
      console.error("Failed...", error.text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit(sendEmail)}>
      <div className="aximo-form-field">
        <Field error={errors.name}>
          <input
            {...register("name", { required: "Name is required." })}
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
          />
        </Field>
      </div>
      <div className="aximo-form-field">
        <Field error={errors.email}>
          <input
            {...register("email", { required: "Email is required." })}
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
          />
        </Field>
      </div>
      <div className="aximo-form-field">
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Your phone number"
        />
      </div>
      <div className="aximo-form-field">
        <Field error={errors.message}>
          <textarea
            {...register("message", { required: "Message is required." })}
            id="message"
            type="message"
            name="message"
            placeholder="Write your message here..."
          ></textarea>
        </Field>
      </div>
      {!statusMessage && (
        <button id="aximo-submit-btn" type="submit" disabled={loading}>
          {loading ? (
            <Preloader />
          ) : (
            <>
              Send message
              <span>
                <img src={ArrowRight3Img} alt="ArrowRight3Img" />
              </span>
            </>
          )}
        </button>
      )}
      {statusMessage && (
        <p
          style={{
            color: statusType === "error" ? "red" : "white",
            fontWeight: "semibold",
          }}
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}

export default MessageForm;
