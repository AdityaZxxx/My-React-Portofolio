// src/components/ContactForm.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulating form submission
      setFormStatus({
        submitted: true,
        success: true,
        message:
          "Your message has been sent successfully! I'll get back to you soon.",
      });

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // In a real app, you would send the form data to your backend or email service here
    } else {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please fix the errors in the form.",
      });
    }
  };

  return (
    <div className="neo-box p-6 md:p-8">
      {formStatus.submitted && (
        <motion.div
          className={`mb-6 p-4 border-4 border-black ${
            formStatus.success
              ? "bg-neo-green dark:bg-neo-green"
              : "bg-neo-pink dark:bg-neo-pink"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-bold">{formStatus.message}</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border-4 border-black ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-red-500">{errors.name}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border-4 border-black ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="mt-1 text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block font-bold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full p-3 border-4 border-black ${
              errors.subject ? "border-red-500" : ""
            }`}
            placeholder="What is this about?"
          />
          {errors.subject && (
            <p className="mt-1 text-red-500">{errors.subject}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => handleChange(e)}
            rows={6}
            className={`w-full p-3 border-4 border-black ${
              errors.message ? "border-red-500" : ""
            }`}
            placeholder="Your message here..."
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-red-500">{errors.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          className="neo-button bg-neo-yellow dark:bg-neo-pink w-full md:w-auto text-lg font-bold"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          SEND MESSAGE
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
